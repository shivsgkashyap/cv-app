import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#303030] text-zinc-100 flex justify-center items-center w-full p-2 absolute left-0 bottom-0">
      <p>Copyright © 2021 michalosman</p>
      <a
        href="https://github.com/michalosman"
        target="_blank"
        className="relative top-1 ml-4 text-3xl text-zinc-100 hover:text-zinc-300"
      >
        <FaGithub />
      </a>
    </footer>
  );
};

export default Footer;
