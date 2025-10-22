import { NavLink } from "react-router-dom";
import type { RecentWorkType } from "../../types/sectionTypes";
import { useRef, useState, useEffect } from "react";
import { triggerAnimation } from "../../utils/triggerAnimation";

export default function SingleWork({ work }: { work: RecentWorkType }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    windowWidth > 850 && triggerAnimation(containerRef, setIsVisible);
    console.log(isVisible)
    // windowWidth <= 850 && triggerAnimation(mobileContainerRef, setIsVisible);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`work-content ${isVisible ? 'slide-in' : 'hidden'} ${work.isReversed && 'reversed'}`} ref={containerRef}>
      <div className="project-details">
        <div className="details-header">
          <div className="label">
            Featured project
          </div>
          <div className="title">
            {work.title}
          </div>
        </div>
        <div className="description">
          <p>
            {work.description}
          </p>
          <div className="project-button">
            <NavLink to={work.website} target='blank'>
              <button className='visit-btn'>
                Visit
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="project-img">
        <div className="img-content" style={{ backgroundImage: `url(${work.image})` }}>
        </div>
      </div>
    </div>
  )
}