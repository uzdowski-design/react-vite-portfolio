import { useState, createContext } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MobileNav, DesktopNav } from './NavBars';

export const NavContext = createContext<{
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isNavOpen: false,
  setIsNavOpen: () => {}
});

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNav = () => {
    setIsNavOpen((prevNav) => !prevNav);
  };

  return (
    <nav>
      <AiOutlineMenu
        size={30}
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] md:hidden"
      />
      <NavContext.Provider value={{ isNavOpen, setIsNavOpen }}>
        {isNavOpen && <MobileNav />}
        <DesktopNav />
      </NavContext.Provider>
    </nav>
  );
};

export default Navbar;
