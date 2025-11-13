export const handleNavigation = (label: string, setActiveLink: (label: string) => void) => {
  setActiveLink(label);
  document.getElementById(label)?.scrollIntoView({ behavior: 'smooth' })
}