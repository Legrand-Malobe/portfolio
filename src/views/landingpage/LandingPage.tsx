import './landingpage.scss';
import About from "../../components/about/About";
import Header from "../../components/header/Header";
import Home from '../../components/home/Home';

export default function LandingPage() {
  return (
    <>
      <Header />
      <div className="main">
        <Home />
        <About />
      </div>
    </>
  )
}