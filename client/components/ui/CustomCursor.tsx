import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor") as HTMLDivElement;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const addHover = () => {
      cursor.classList.add("cursor--hover");
    };

    const removeHover = () => {
      cursor.classList.remove("cursor--hover");
    };

    document.addEventListener("mousemove", moveCursor);

    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div className="cursor" />;
};

export default CustomCursor;
