import { useState, useEffect } from "react";

const Exercise7 = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Update Effects
    const handleMouse = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);

    // Remove Effects
    return () => {
      window.removeEventListener("mousemove", handleMouse);

    };
  }, []);

  return (
    <>
      <h3>
        Mouse Y: <strong style={{ color: "Red" }}>{mouse.y}</strong>
      </h3>
      <h3>
        Mouse X: <strong style={{ color: "green" }}>{mouse.x}</strong>
      </h3>
    </>
  );
};

export default Exercise7;
