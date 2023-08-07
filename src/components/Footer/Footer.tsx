import { LuMail, LuGithub } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-lime-500 text-center text-white mt-auto">
      <div className="container py-3 px-2 mx-auto">
        <p className="mb-1">
          All rights reserved © {new Date().getFullYear()} by Daniil Popov
        </p>
        <div className="mb-1">
          <a
            href="mailto:x6uhrox@gmail.com"
            className="px-3 py-1 no-underline inline-flex items-center justify-center hover:text-violet-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-violet-400 focus-visible:rounded-lg duration-300"
          >
            <LuMail size={20} />
            <span className="ms-2 font-medium">x6uhrox@gmail.com</span>
          </a>
        </div>
        <div className="m-0">
          <a
            href="https://github.com/DaniilPopov0809/radency-ht-02"
            className="px-3 py-1 no-underline inline-flex items-center justify-center hover:text-violet-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-violet-400 focus-visible:rounded-lg duration-300"
          >
            <LuGithub size={20} />
            <span className="ms-2 font-medium"> GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
