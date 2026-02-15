import Plasma from "./Plasma";

function PlasmaBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{
        height: "100vh",
        width: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        willChange: "transform",
        isolation: "isolate",
      }}
    >
      {/* base background — must fill visible viewport */}
      <div
        className="absolute inset-0 bg-[#070b14]"
        style={{
          height: "100vh",
          width: "100%",
        }}
      />

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
