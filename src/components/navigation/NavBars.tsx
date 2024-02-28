import NavLink from './NavLink';
import { menuItems } from '../../utils/constants';

export const MobileNav = () => {
  return (
    <div className="w-full h-screen md:hidden bg-white/90 flex flex-col justify-center items-center z-20">
      {menuItems.map((item) => (
        <NavLink
          key={item}
          section={item.toLowerCase()}
          title={item}
          size={20}
          className="w-[75%] flex justify-center items-center"
        />
      ))}
    </div>
  );
};

export const DesktopNav = () => {
  return (
    <div className="hidden md:block fixed top-[25%] z-10">
      <div className="flex flex-col">
        {menuItems.map((item) => (
          <NavLink
            key={item}
            section={item.toLowerCase()}
            size={20}
            className=""
          />
        ))}
      </div>
    </div>
  );
};
