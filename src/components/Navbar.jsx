import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const tabsRef = useRef([]);
  const lastScrollY = useRef(0);
  const autoScrollLock = useRef(false);
  const spyLock = useRef(false);
  const spyTimer = useRef(null);
  const spyDebounceTimer = useRef(null);
  const pendingSpyId = useRef(null);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  /* indicator */
  useEffect(() => {
    const i = links.findIndex((l) => l.id === activeTab);
    const el = tabsRef.current[i];
    if (!el) return;

    setIndicatorStyle({
      left: el.offsetLeft,
      width: el.clientWidth,
      opacity: 1,
    });
  }, [activeTab]);

  /* scroll hide */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      if (!autoScrollLock.current) {
        if (y > lastScrollY.current && y > 80) setHidden(true);
        else setHidden(false);
      }

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* smooth-scroll end detector */
  const watchScrollEnd = () => {
    let last = window.scrollY;

    const id = setInterval(() => {
      const now = window.scrollY;
      if (Math.abs(now - last) < 2) {
        autoScrollLock.current = false;
        clearInterval(id);
      }
      last = now;
    }, 120);
  };

  /* nav click */
  const handleNavClick = (id) => {
    setActiveTab(id);
    setHidden(false);
    setMobileOpen(false);

    autoScrollLock.current = true;

    // ✅ spy lock to prevent flicker
    spyLock.current = true;
    clearTimeout(spyTimer.current);
    spyTimer.current = setTimeout(() => {
      spyLock.current = false;
    }, 500);

    watchScrollEnd();
  };

  const handleSpySetActive = (id) => {
    if (spyLock.current) return;

    pendingSpyId.current = id;

    clearTimeout(spyDebounceTimer.current);
    spyDebounceTimer.current = setTimeout(() => {
      setActiveTab(pendingSpyId.current);
    }, 180); // adjust 150–250 if you want
  };

  const activeLabel = links.find((l) => l.id === activeTab)?.label || "Menu";

  return (
    <div
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500
        ${hidden ? "-translate-y-24 opacity-0" : "translate-y-0 opacity-100"}
      `}
    >
      {/* ================= MOBILE (phones only) ================= */}
      <div className="md:hidden backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="flex items-center justify-between px-5 py-4">
          <span className="text-white font-semibold">{activeLabel}</span>

          <button
            onClick={() => setMobileOpen((s) => !s)}
            className="text-white/80 hover:text-white"
          >
            {mobileOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>

        {mobileOpen && (
          <ul className="px-4 pb-4 flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  smooth
                  spy
                  onSetActive={handleSpySetActive}
                  onClick={() => handleNavClick(link.id)}
                  className={`
                    block px-4 py-3 rounded-lg
                    ${
                      activeTab === link.id
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }
                  `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ================= TABLET + DESKTOP ================= */}
      <div className="hidden md:flex justify-center mt-8 px-4">
        <svg className="absolute w-0 h-0">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
              <feColorMatrix
                mode="matrix"
                values="1 0 0 0 0  
                        0 1 0 0 0  
                        0 0 1 0 0  
                        0 0 0 20 -10"
              />
            </filter>
          </defs>
        </svg>

        <nav className="relative p-2 rounded-full backdrop-blur-sm bg-white/5 border border-white/10">
          {/* indicator */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ filter: "url(#goo)" }}
          >
            <div
              className="
                absolute top-1/2 -translate-y-1/2 h-[78%]
                rounded-full bg-white/20 border border-white/40
                shadow-[0_8px_20px_rgba(0,0,0,0.25)]
                transition-all duration-700
              "
              style={indicatorStyle}
            />
          </div>

          <ul className="relative flex items-center gap-2 z-10">
            {links.map((link, index) => (
              <li key={link.id} ref={(el) => (tabsRef.current[index] = el)}>
                <Link
                  to={link.id}
                  smooth
                  spy
                  onSetActive={handleSpySetActive}
                  onClick={() => handleNavClick(link.id)}
                  className={`
                    block px-6 py-2 rounded-full text-sm font-semibold
                    cursor-pointer transition-all duration-300
                    ${
                      activeTab === link.id
                        ? "text-white scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
                        : "text-white/60 hover:text-white"
                    }
                  `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
