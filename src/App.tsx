import './App.scss'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './views/LandingPage'
import type { NavItemsType } from './types/sectionTypes';
import { useEffect, useRef, useState } from 'react';
import { ActiveLinkContext } from './context/ActiveLinkContext';

function App() {

  const navItems: NavItemsType[] = [
    { id: 0, link: '#home', label: 'home' },
    { id: 1, link: '#skills', label: 'skills' },
    { id: 2, link: '#work', label: 'work' },
    { id: 3, link: '#contact', label: 'contact' },
  ]
  const [activeLink, setActiveLink] = useState<string>(navItems[0].label);
  const containerRef = useRef<HTMLDivElement>(null)


  const handleScroll = () => {
    navItems.forEach((item) => {
      const section = document.querySelector(item.link)! as HTMLElement;
      if (section) {
        const sectionTop = section?.getBoundingClientRect()?.y;
        if (pageYOffset >= sectionTop - (item.id + 1 == navItems.length ? 500 : 188)) {
          setActiveLink(item.label)
        }
      }
    });
  }

  useEffect(() => {
    const currentRef = containerRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <section className='main-container' ref={containerRef}>
      <div className="main-content">
        <ActiveLinkContext.Provider value={{ activeLink: activeLink, setActiveLink: setActiveLink }}>
          <Routes>
            <Route path='/' element={
              <LandingPage navItems={navItems} />} />
          </Routes>
        </ActiveLinkContext.Provider>
      </div>
    </section>
  )
}

export default App
