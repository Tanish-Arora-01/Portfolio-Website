import Plasma from "./Plasma";

function PlasmaBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{
        height: "100dvh",
        width: "100%",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        willChange: "transform",
        isolation: "isolate",
      }}
    >
      {/* base background */}
      <div className="absolute inset-0 bg-[#070b14]" />

      {/* OGL container */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
      >
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
