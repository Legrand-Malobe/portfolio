import type { RefObject } from "react";

export const triggerAnimation = (
  containerRef: RefObject<HTMLDivElement | null>,
  setIsVisible: (isVisible: boolean) => void,
  windowWidth: number,
  setWindowWidth: (windowWidth: number) => void
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
      { threshold: 0.2 }
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
  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  };
  window.addEventListener('resize', handleResize);

  windowWidth > 850 && handleAnimation();
  // windowWidth <= 850 && triggerAnimation(mobileContainerRef, setIsVisible);

  return () => {
    window.removeEventListener('resize', handleResize);
  };

}