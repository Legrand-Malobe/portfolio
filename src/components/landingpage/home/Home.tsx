import { useContext, useEffect, useRef, useState } from 'react';
import { handleNavigation } from '../../../utils/handleNavigation';
import './home.scss';
import { triggerAnimation } from '../../../utils/triggerAnimation';
import { ActiveLinkContext } from '../../../context/ActiveLinkContext';
import introImg from '../../../assets/images/background02.gif';

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const { setActiveLink } = useContext(ActiveLinkContext);


  useEffect(() => {
    triggerAnimation(containerRef, setIsVisible)
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
              Passionate about web application design and development, i build responsive and user-friendly applications. With expertise in both front-end and back-end development, i focus on clean code that ensures a seamless user experience while providing robust server-side functionality.
            </p>
          </div>
          <div className="contact-button">
            <button onClick={() => handleNavigation('contact', setActiveLink)}>
              Contact me !
            </button>
          </div>
        </div>
        <div className="home-img">
          <img className="img-content" src={introImg} alt='img-content' />
          <div className="home-img-content"></div>
        </div>
      </div>
    </section >
  )
}