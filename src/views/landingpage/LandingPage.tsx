import './landingpage.scss';
import About from "../../components/about/About";
import Header from "../../components/header/Header";
import Home from '../../components/home/Home';
import Work from '../../components/work/Work';

export default function LandingPage() {
  return (
    <>
      <Header />
      <div className="landingpage-content">
        <Home />
        <Work />
        <About />
      </div>
    </>
  )
}