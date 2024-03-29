import { useState, useEffect, useRef } from "react";

function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  function enter() {
    setHovered(true);
  }
  function leave() {
    setHovered(false);
  }
  useEffect(() => {
    let currentRef = ref.current;
    ref.current.addEventListener("mouseenter", enter);
    ref.current.addEventListener("mouseleave", leave);
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("mouseenter", enter);
        currentRef.removeEventListener("mouseleave", leave);
      }
    };
  }, []);

  return [hovered, ref];
}
export default useHover;
