import ProjectItem from './ProjectItem';
import blackImg from '/images/black.jpg';
import blueImg from '/images/blue.jpg';
import redImg from '/images/red.jpg';
import pinkImg from '/images/pink.jpg';

const Projects = () => {
  return (
    <section id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h2 className="text-4xl text-center font-bold text-[#001b5e]">
        Projects
      </h2>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus atque
        modi exercitationem alias minus velit nemo? Repudiandae eos, velit error
        omnis pariatur inventore delectus molestiae, exercitationem, suscipit
        eveniet harum quod.
      </p>
      <div className="grid sm:grid-cols-2 gap-12 auto-rows-fr ">
        <ProjectItem img={blackImg} title="Black App" tech="React" />
        <ProjectItem img={pinkImg} title="Pink App" tech="Typescript" />
        <ProjectItem img={blueImg} title="Blue App" tech="Next" />
        <ProjectItem img={redImg} title="Red App" tech="Node" />
      </div>
    </section>
  );
};

export default Projects;
