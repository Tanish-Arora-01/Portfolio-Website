import React, { useRef, useState } from "react";

const SpotlightButton = ({ children, className = "", ...props }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <button
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`
        relative overflow-hidden rounded-full
        backdrop-blur-sm bg-white/5
        border border-white/20
        text-white font-semibold
        transition-all duration-300
        hover:bg-white/10 hover:border-white/40
        ${className}
      `}
      {...props}
    >
      {/* spotlight layer */}
      <span
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(160px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.25), transparent 60%)`,
        }}
      />

      <span className="relative z-10 flex items-center justify-center gap-3">
        {children}
      </span>
    </button>
  );
};

export default SpotlightButton;
