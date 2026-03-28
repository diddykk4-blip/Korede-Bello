import { useState, useEffect, useRef } from "react";

const SpotlightBackground = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const moveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      if (moveTimeout.current) clearTimeout(moveTimeout.current);
      moveTimeout.current = setTimeout(() => {
        setIsMoving(false);
      }, 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-30">
      {/* Outer warm ambient glow */}
      <div
        className="absolute rounded-full pointer-events-none transition-all duration-500 ease-out"
        style={{
          left: mouse.x,
          top: mouse.y,
          width: isMoving ? "420px" : "520px",
          height: isMoving ? "420px" : "520px",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(255,200,40,0.08) 0%, transparent 70%)",
        }}
      />
      {/* Inner crisp gold spotlight */}
      <div
        className="absolute rounded-full pointer-events-none transition-all duration-200 ease-out"
        style={{
          left: mouse.x,
          top: mouse.y,
          width: isMoving ? "180px" : "240px",
          height: isMoving ? "180px" : "240px",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(255,210,60,0.55) 0%, rgba(212,175,55,0.25) 40%, transparent 70%)",
          boxShadow: isMoving
            ? "0 0 40px 10px rgba(212,175,55,0.12)"
            : "0 0 80px 20px rgba(212,175,55,0.18)",
        }}
      />
    </div>
  );
};

export default SpotlightBackground;
