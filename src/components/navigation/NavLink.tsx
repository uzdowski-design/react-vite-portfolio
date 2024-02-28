import { cn } from '../../utils/cn';
import { IconType } from 'react-icons';
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineProject
} from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';

const ICONS = {
  menu: AiOutlineMenu,
  home: AiOutlineHome,
  work: GrProjects,
  projects: AiOutlineProject,
  resume: BsPerson,
  contact: AiOutlineMail
};

const NavLink = ({
  section,
  title = '',
  size = undefined,
  className = ''
}: {
  section: string;
  title?: string;
  size?: string | number | undefined;
  className?: string;
}) => {
  const Icon: IconType = ICONS[section as keyof typeof ICONS];

  return (
    <a
      href={`#${section}`}
      className={cn(
        'rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200',
        className
      )}
    >
      <Icon size={size} />
      {title && <span className="pl-4">{title}</span>}
    </a>
  );
};

export default NavLink;
