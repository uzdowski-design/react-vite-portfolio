import Socials from '../common/Socials';

const Footer = () => {
  return (
    <footer
      id="footer"
      className=" m-atuo md:pl-20 p-4 mt-16 flex flex-col items-center justify-center bg-[#f2f2f2] w-full"
    >
      <Socials />
      <a href="https://uzdowski.design" target="_blank">
        <p className="my-2 pt-2 text-base font-normal text-stone-400 hover:text-stone-600 ease-in-out duration-200">
          &copy; uzdowski.design
        </p>
      </a>
    </footer>
  );
};

export default Footer;
