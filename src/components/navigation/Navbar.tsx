import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MobileNav, DesktopNav } from './NavBars';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const handleNav = () => {
    setIsNavOpen((prevNav) => !prevNav);
  };

  return (
    <nav>
      <AiOutlineMenu
        size={30}
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {isNavOpen && <MobileNav />}
      <DesktopNav />
    </nav>
  );
};

export default Navbar;
