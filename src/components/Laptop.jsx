import React, { Suspense, useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  useGLTF,
  useAnimations,
  OrbitControls,
  Html,
  useTexture,
} from "@react-three/drei";
import { Box3, Vector3, MathUtils } from "three";
import * as THREE from "three";

function MacBookModel() {
  const { scene, animations } = useGLTF("/macbook.glb");
  const { actions, names } = useAnimations(animations, scene);
  const groupRef = useRef();
  const { camera, controls } = useThree();

  // Load your custom wallpaper from the public folder
  // Change "my-custom-wallpaper.jpg" to your actual image file name
  const screenTexture = useTexture("/wallpaper.jpeg");

  // If the image looks upside down, change this to true
  screenTexture.flipY = true;

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = false;
        child.receiveShadow = false;

        if (child.material) {
          child.material.polygonOffset = false;
          child.material.precision = "mediump";
          child.material.envMapIntensity = 1.0;
          child.material.needsUpdate = true;
        }

        // Apply the wallpaper specifically to the screen mesh
        if (child.name === "Object_7") {
          child.material.map = screenTexture;
          child.material.emissiveMap = screenTexture;
          child.material.emissive = new THREE.Color(0xffffff);
          child.material.emissiveIntensity = 0.8;
          child.material.precision = "mediump";
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
  }, [actions, names, scene, camera, controls, screenTexture]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!groupRef.current) return;

    // 1. VERTICAL TILT (X-AXIS)
    groupRef.current.rotation.x = Math.PI / 5 + Math.cos(t / 2) / 10;

    // 2. FLOAT POSITION (Y-AXIS)
    groupRef.current.position.y = -1.25 + Math.sin(t) * 0.15;

    // 3. ROTATION ANGLE (Y-AXIS / LEFT-RIGHT)
    const action = actions[names[0]];
    const startRotation = (-1 * Math.PI) / 10;
    const idleRotation = Math.sin(t * 0.3) * 0.08;

    if (action) {
      const duration = action.getClip().duration;
      const progress = action.time / duration;
      const transitionStart = 0.8;

      if (progress < transitionStart) {
        groupRef.current.rotation.y = startRotation;
      } else {
        const blend = Math.min(
          1,
          (progress - transitionStart) / (1 - transitionStart)
        );
        groupRef.current.rotation.y = MathUtils.lerp(
          startRotation,
          idleRotation,
          blend
        );
      }
    } else {
      groupRef.current.rotation.y = idleRotation;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={20} />
    </group>
  );
}

const Laptop = () => {
  const wrapperRef = useRef(null);
  const isInView = useInView(wrapperRef, { margin: "200px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handleResize = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  if (isMobile) return null;

  return (
    <div ref={wrapperRef} className="h-[650px] md:h-[820px] w-full relative z-10">
      <Canvas
        frameloop={isInView ? "always" : "demand"}
        dpr={[1, 1.5]}
        camera={{ position: [0, 1.4, 11], fov: 40 }}
        gl={{
          antialias: true,
          logarithmicDepthBuffer: true,
          powerPreference: "high-performance",
        }}
      >
        <Environment preset="city" resolution={64} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-5, 10, 5]} intensity={1.5} />

        <Suspense
          fallback={
            <Html center>
              <div className="text-[#38bdf8] animate-pulse font-mono font-bold tracking-widest">
                BOOTING...
              </div>
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