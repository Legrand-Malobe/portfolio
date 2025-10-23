import './landingpage.scss';
import Header from "../components/header/Header";
import Home from '../components/landingpage/home/Home';
import Work from '../components/landingpage/work/Work';
import type { NavItemsType } from '../types/sectionTypes';
import Skill from '../components/landingpage/skill/Skill';
import Contact from '../components/landingpage/contact/Contact';
import Footer from '../components/landingpage/footer/Footer';

export default function LandingPage({ navItems }: { navItems: NavItemsType[] }) {

  return (
    <>
      <Header navItems={navItems} />
      <div className="landingpage-content">
        <Home />
        <Skill />
        <Work />
        <Contact />
        <Footer />
      </div>
    </>
  )
}