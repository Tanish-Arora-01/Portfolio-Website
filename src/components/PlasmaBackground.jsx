import Plasma from "./Plasma";

function PlasmaBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* base background */}
      <div className="absolute inset-0 bg-[#070b14]" />

      {/* IMPORTANT: real DOM container for OGL */}
      <div className="absolute inset-0 w-screen h-screen">
        <Plasma
          color="#b19eef"
          speed={0.4}
          direction="forward"
          scale={1}
          opacity={0.7}
          mouseInteractive={false}
        />
      </div>
    </div>
  );
}

export default PlasmaBackground;
