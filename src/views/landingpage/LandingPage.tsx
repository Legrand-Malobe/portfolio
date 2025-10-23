import './landingpage.scss';
import Header from "../../components/header/Header";
import Home from '../../components/home/Home';
import Work from '../../components/work/Work';
import { useEffect, useState } from 'react';
import type { NavItemsType } from '../../types/sectionTypes';
import Skill from '../../components/skill/Skill';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';

export default function LandingPage() {
  const navItems: NavItemsType[] = [
    { id: 0, link: '#home', label: 'home' },
    { id: 1, link: '#work', label: 'work' },
    { id: 2, link: '#skill', label: 'skill' },
    { id: 3, link: '#contact', label: 'contact' },
  ]
  const [activeLink, setActiveLink] = useState<string>(navItems[0].label);

  const handleScroll = () => {
    navItems.forEach((item) => {
      const section = document.querySelector(item.link)! as HTMLElement;
      if (section) {
        const sectionTop = section?.getBoundingClientRect()?.top;
        if (window.innerHeight >= sectionTop - 120) {
          setActiveLink(item.label)
        }
      }
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header activeLink={activeLink} setActiveLink={setActiveLink} navItems={navItems} />
      <div className="landingpage-content">
        <Home setActiveLink={setActiveLink}/>
        <Skill />
        <Work />
        <Contact />
        <Footer />
      </div>
    </>
  )
}