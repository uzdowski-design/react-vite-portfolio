import Socials from '../common/Socials';
import Typewriting from './Typewriting';

const Hero = () => {
  return (
    <section>
      <img
        className="w-full h-screen object-cover object-center md:object-center scale-x-[-1]"
        src="/images/hero.jpg"
        alt="hero"
      />
      <div className="w-full h-screen absolute inset-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
            I'm Jane Doe
          </h1>
          <h2 className="flex text-2xl sm:text-3xl py-4 text-gray-800">
            {' '}
            I'm a<Typewriting />
          </h2>
          <Socials />
        </div>
      </div>
    </section>
  );
};

export default Hero;
