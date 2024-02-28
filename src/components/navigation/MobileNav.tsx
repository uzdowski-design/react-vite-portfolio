import NavLink from './NavLink';

const MobileNav = () => {
  return (
    <div className="w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
      <NavLink
        icon="home"
        title="Home"
        size={20}
        className="w-[75%] flex justify-center items-center"
      />
      <NavLink
        icon="work"
        title="Work"
        size={20}
        className="w-[75%] flex justify-center items-center"
      />
      <NavLink
        icon="projects"
        title="Projects"
        size={20}
        className="w-[75%] flex justify-center items-center"
      />
      <NavLink
        icon="resume"
        title="Resume"
        size={20}
        className="w-[75%] flex justify-center items-center"
      />
      <NavLink
        icon="contact"
        title="Contact"
        size={20}
        className="w-[75%] flex justify-center items-center"
      />
    </div>
  );
};

export default MobileNav;
