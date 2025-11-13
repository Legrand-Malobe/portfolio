import { createContext } from "react";

export const ActiveLinkContext = createContext<{ activeLink: string, setActiveLink: (activeLink: string) => void }>({
  activeLink: 'home',
  setActiveLink: () => {} 
})