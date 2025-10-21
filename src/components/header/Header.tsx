import { NavLink } from 'react-router-dom';
import type { NavItemsType } from '../../types/sectionTypes';
import './Header.scss';
import { useState } from 'react';

const navItems: NavItemsType[] = [
  { id: 0, link: '#about', label: 'about' },
  { id: 1, link: '#works', label: 'works' },
  { id: 2, link: '#skills', label: 'skills' },
  { id: 3, link: '#contact', label: 'contact' },
]
export default function Header() {
  const [activeLink, setActiveLink] = useState<string>(navItems[0].label)

  console.log(activeLink);

  const handleNavigation = (item: NavItemsType) => {
    setActiveLink(item.label);
  }
  return (
    <header>
      <div className="header-container">
        <nav>
          <ul>
            {navItems.map((item, index) => (
              <div
                className='nav-item'
                key={index}
                onClick={() => handleNavigation(item)}
              >
                <li className={item.link == "#" + activeLink ? "active" : ""}>{item.label}</li>
              </div>))}
          </ul>
        </nav>
      </div>
    </header>
  )
}