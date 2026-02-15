import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  useGLTF,
  useAnimations,
  OrbitControls,
  ContactShadows,
  Html,
} from "@react-three/drei";
import { Box3, Vector3 } from "three";

function MacBookModel() {
  const { scene, animations } = useGLTF("/macbook.glb");
  const { actions, names } = useAnimations(animations, scene);
  const groupRef = useRef();
  const { camera, controls } = useThree(); // Fixed: Removed duplicate useThree call if it was there

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = false;
        child.receiveShadow = false;

        if (child.material) {
          child.material.polygonOffset = false;
          child.material.precision = "highp";
          child.material.envMapIntensity = 1.5;
          child.material.needsUpdate = true;
        }
      }
    });

    const box = new Box3().setFromObject(scene);
    const size = new Vector3();
    const center = new Vector3();
    box.getSize(size);
    box.getCenter(center);

    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    const cameraZ = Math.abs(maxDim / Math.sin(fov / 2));

    camera.position.set(center.x, center.y * 0.6, cameraZ * 0.85);
    camera.lookAt(center);

    if (controls) {
      controls.target.copy(center);
      controls.update();
    }

    if (actions[names[0]]) {
      actions[names[0]].reset().fadeIn(0.5).play();
      actions[names[0]].clampWhenFinished = true;
      actions[names[0]].setLoop(1, 1);
    }
  }, [actions, names, scene, camera, controls]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!groupRef.current) return; // Fixed: check if ref exists

    groupRef.current.position.y = -1.25 + Math.sin(t) * 0.15;
    groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.08;

    const action = actions[names[0]];
    if (action) {
      const duration = action.getClip().duration;
      const progress = action.time / duration;

      let targetTilt = 0;
      if (progress > 0.75) {
        const tiltProgress = (progress - 0.75) / 0.2;
        targetTilt = 0.5 * tiltProgress;
      }
      // Fixed: added safe check for rotation
      if (groupRef.current) {
        groupRef.current.rotation.x +=
          (targetTilt - groupRef.current.rotation.x) * 0.08;
      }
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={20} />
    </group>
  );
}

const Laptop = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 1. Define the media query (Tailwind 'md' is usually 768px)
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // 2. Set initial state
    setIsMobile(mediaQuery.matches);

    // 3. Listen for changes (in case user resizes window or rotates phone)
    const handleResize = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleResize);

    // 4. Cleanup
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  // 🔴 PERFORMANCE SAVER: If mobile, return null immediately.
  // This prevents the Canvas from ever initializing.
  if (isMobile) {
    return null;
  }

  return (
    <div className="h-[650px] md:h-[820px] w-full">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 1.4, 11], fov: 40 }}
        gl={{
          antialias: true,
          logarithmicDepthBuffer: true,
          powerPreference: "high-performance",
        }}
      >
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} />
        <pointLight position={[0, -1, 2]} intensity={2} color="#38bdf8" />

        <Suspense
          fallback={
            <Html center>
              <div className="text-[#38bdf8] animate-pulse">BOOTING...</div>
            </Html>
          }
        >
          <MacBookModel />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
        />
      </Canvas>
    </div>
  );
};

export default Laptop;
