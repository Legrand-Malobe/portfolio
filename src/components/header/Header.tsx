import type { NavItemsType } from '../../types/sectionTypes';
import './Header.scss';

export default function Header({ activeLink, setActiveLink, navItems }: {
  activeLink: string, setActiveLink: (data: string) => void, navItems: NavItemsType[]
}) {

  const handleNavigation = (item: NavItemsType) => {
    setActiveLink(item.label);
    document.getElementById(item.label)?.scrollIntoView({ behavior: 'smooth' })
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
                onClick={() => handleNavigation(item,)}
              >
                <li className={item.link == "#" + activeLink ? "active" : ""}>{item.label}</li>
              </div>))}
          </ul>
        </nav>
      </div>
    </header>
  )
}