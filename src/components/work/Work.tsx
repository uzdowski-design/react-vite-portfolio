import WorkItem from './WorkItem';
import { workHistory } from '../../utils/constants';

const Work = () => {
  return (
    <section id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h2 className="text-4xl font-bold text-center text-[#001b5e] mb-5">
        Work
      </h2>
      {workHistory.map((work) => (
        <WorkItem key={work.date + work.company} {...work} />
      ))}
    </section>
  );
};

export default Work;
