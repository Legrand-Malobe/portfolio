import { useEffect, useRef, useState } from 'react';
import { handleNavigation } from '../../../utils/handleNavigation';
import './home.scss';
import { triggerAnimation } from '../../../utils/triggerAnimation';

export default function Home({ setActiveLink }: { setActiveLink: (label: string) => void }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    triggerAnimation(containerRef, setIsVisible, windowWidth, setWindowWidth)
  }, [isVisible]);

  
  return (
    <section className={`home-container ${isVisible ? 'slide-in' : 'hidden'}`} id='home' ref={containerRef}>
      <div className="home-content">
        <div className="home-intro">
          <div className="title">
            <div className="name">
              Hi, i'm Legrand Malobe
            </div>
            <div className="profession">
              Web Developer
            </div>
          </div>
          <div className="description">
            <p>
              Passionate about web application design and development, I build responsive and user-friendly websites and applications. With expertise in both front-end and back-end development, I focus on clean code that ensures a seamless user experience while providing robust server-side functionality.
            </p>
          </div>
          <div className="contact-button">
            <button onClick={() => handleNavigation('contact', setActiveLink)}>
              Contact me !
            </button>
          </div>
        </div>
        <div className="home-img">
          <div className="img-content">
          </div>
        </div>
      </div>
    </section >
  )
}