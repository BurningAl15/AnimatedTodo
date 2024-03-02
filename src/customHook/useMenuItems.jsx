import { useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
const staggerMenuItems = stagger(0.05, { startDelay: 0.075 });

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    // animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      ".todo-list",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.3,
      }
    );

    animate(
      ".todo-item",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0, filter: "blur(20px)" },
      {
        duration: 0.1,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return scope;
}

export { useMenuAnimation };
