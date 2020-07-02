import React from "react";
import { Fade } from "react-reveal";
import logo from "../img/logo.svg";

const Navbar = () => {
  return (
    <Fade top duration={1000} distance="20px">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            width="30"
            height="30"
            className=" align-top"
            alt=""
            loading="lazy"
          />
          lyricartist
        </a>
      </nav>
    </Fade>
  );
};

export default Navbar;
