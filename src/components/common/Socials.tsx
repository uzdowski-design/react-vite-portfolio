import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
const Socials = () => {
  return (
    <div className="flex justify-between text-gray-800 max-w-[200px] w-full pt-2">
      <a href="https://x.com" target="_blank">
        <FaXTwitter
          className="cursor-pointer hover:scale-110 ease-in duration-200"
          size={20}
        />
      </a>
      <a href="https://facebook.com" target="_blank">
        <FaFacebookF
          className="cursor-pointer hover:scale-110 ease-in duration-200"
          size={20}
        />
      </a>
      <a href="https://instagram.com" target="_blank">
        <FaInstagram
          className="cursor-pointer hover:scale-110 ease-in duration-200"
          size={20}
        />
      </a>
      <a href="https://x.com" target="_blank">
        <FaLinkedin
          className="cursor-pointer hover:scale-110 ease-in duration-200"
          size={20}
        />
      </a>
    </div>
  );
};

export default Socials;
