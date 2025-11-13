import type { RefObject } from "react";

export const triggerAnimation = (
  containerRef: RefObject<HTMLDivElement | null>,
  setIsVisible: (isVisible: boolean) => void,
) => {

  const handleAnimation = () => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
        else {
          setIsVisible(false)
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }
  handleAnimation();
}