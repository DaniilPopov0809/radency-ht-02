import React from "react";
import { Container } from "react-bootstrap";
import { LuMail, LuGithub } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-success text-center text-light mt-auto">
      <Container className=" py-3">
        <p className="mb-1">
          All rights reserved © {new Date().getFullYear()} by Daniil Popov
        </p>
        <div className="mb-1">
          <a href="mailto:x6uhrox@gmail.com" className="text-decoration-none d-block d-flex align-items-center justify-content-center">
            <LuMail size={20} />
            <span className="ms-2">x6uhrox@gmail.com</span>
          </a>
        </div>
        <div className="m-0">
          <a
            href="https://github.com/DaniilPopov0809/radency-ht-02"
            className="text-decoration-none d-block d-flex align-items-center justify-content-center"
          >
            <LuGithub size={20} /><span className="ms-2"> GitHub</span>
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
