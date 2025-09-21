import { useEffect } from "react";

const CursorSpotlight = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const spotlight = document.getElementById("cursor-spotlight");
      if (spotlight) {
        spotlight.style.left = `${e.clientX}px`;
        spotlight.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      id="cursor-spotlight"
      className="fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-0"
      style={{
        width: "1000px",
        height: "1000px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 80%)",
        filter: "blur(40px)",
        transition: "transform 0.1s ease-out",
      }}
    ></div>
  );
};

export default CursorSpotlight;