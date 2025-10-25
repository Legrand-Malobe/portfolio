import { useContext } from 'react';
import type { NavItemsType } from '../../types/sectionTypes';
import { handleNavigation } from '../../utils/handleNavigation';
import './header.scss';
import { ActiveLinkContext } from '../../context/ActiveLinkContext';

export default function Header({ navItems }: { navItems: NavItemsType[] }) {
  const { activeLink, setActiveLink } = useContext(ActiveLinkContext);

  return (
    <header>
      <div className="header-container">
        <div className="title">
          {`<legrand_malobe/> `}
        </div>
        <nav>
          <ul>
            {navItems.map((item, index) => (
              <div
                className='nav-item'
                key={index}
                onClick={() => handleNavigation(item.label, setActiveLink)}
              >
                <li className={item.link == "#" + activeLink ? "active" : ""}>{item.label}</li>
              </div>))}
          </ul>
        </nav>
      </div>
    </header>
  )
}