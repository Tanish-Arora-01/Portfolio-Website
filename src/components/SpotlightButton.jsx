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
        backdrop-blur-md bg-white/60
        border border-black/10
        text-slate-900 font-semibold
        transition-all duration-300
        hover:bg-white/80 hover:border-black/20 hover:shadow-lg hover:shadow-indigo-500/10
        ${className}
      `}
      {...props}
    >
      {/* spotlight layer */}
      <span
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(160px circle at ${pos.x}px ${pos.y}px, rgba(99,102,241,0.15), transparent 60%)`,
        }}
      />

      <span className="relative z-10 flex items-center justify-center gap-3">
        {children}
      </span>
    </button>
  );
};

export default SpotlightButton;
