import Plasma from "./Plasma";

function PlasmaBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        willChange: "transform",
        isolation: "isolate",
      }}
    >
      {/* base background */}
      <div className="absolute inset-0 bg-[#070b14]" />

      {/* OGL container — MUST be fixed, not absolute */}
      <div
        className="fixed inset-0"
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
