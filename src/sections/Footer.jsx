import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <FaGithub alt="github" className="w-1/2 h-1/2 text-white"/>
        </div>
        <div className="social-icon">
        <FaXTwitter alt="github" className="w-1/2 h-1/2 text-white"/>
        </div>
        <div className="social-icon">
        <FaLinkedinIn alt="github" className="w-1/2 h-1/2 text-white"/>
        </div>
        <div className="social-icon">
        <SiLinktree alt="github" className="w-1/2 h-1/2 text-white"/>
        </div>
      </div>
      <p className="text-white-500">© 2024 Talha Tarique. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
