import { useEffect } from "react";

const ViewportHeight = () => {
  useEffect(() => {
    const setHeight = () => {
      const vh = window.visualViewport
        ? window.visualViewport.height
        : window.innerHeight;

      document.documentElement.style.setProperty("--app-height", `${vh}px`);
    };

    setHeight();

    window.visualViewport?.addEventListener("resize", setHeight);
    window.visualViewport?.addEventListener("scroll", setHeight);
    window.addEventListener("orientationchange", setHeight);

    return () => {
      window.visualViewport?.removeEventListener("resize", setHeight);
      window.visualViewport?.removeEventListener("scroll", setHeight);
      window.removeEventListener("orientationchange", setHeight);
    };
  }, []);

  return null;
};

export default ViewportHeight;
