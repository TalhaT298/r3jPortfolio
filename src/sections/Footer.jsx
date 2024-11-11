import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { FaMediumM } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/TalhaT298" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub alt="github" className="w-1/2 h-1/2 text-white"/>
        </a>
        <a href="https://x.com/TalhaTarique1" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaXTwitter alt="twitter" className="w-1/2 h-1/2 text-white"/>
        </a>
        <a href="https://www.linkedin.com/in/talha-tarique/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedinIn alt="linkedin" className="w-1/2 h-1/2 text-white"/>
        </a>
        <a href="https://linktr.ee/talhatarique" target="_blank" rel="noopener noreferrer" className="social-icon">
          <SiLinktree alt="linktree" className="w-1/2 h-1/2 text-white"/>
        </a>
        <a href="https://medium.com/@talhatarique" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaMediumM alt="medium" className="w-1/2 h-1/2 text-white"/>
        </a>
      </div>
      <p className="text-white-500">© 2024 Talha Tarique. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
