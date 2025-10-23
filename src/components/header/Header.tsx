import type { NavItemsType } from '../../types/sectionTypes';
import { handleNavigation } from '../../utils/handleNavigation';
import './Header.scss';

export default function Header({ activeLink, setActiveLink, navItems }: {
  activeLink: string, setActiveLink: (label: string) => void, navItems: NavItemsType[]
}) {

  return (
    <header>
      <div className="header-container">
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