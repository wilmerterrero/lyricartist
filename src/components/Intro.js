import React from "react";
import {Fade} from "react-reveal";
import "./Intro.css";
import banner from "../img/banner.svg";

const Intro = () => {
  return (
    <div className="intro">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Fade right duration={1000}>
                <img src={banner} alt="banner" className="logo" />
            </Fade>
          </div>
          <div className="col-md-6">
            <Fade left duration={1000}>
                <h2>Busca la letra de tu canción favorita ❤</h2>
                <li>Ingresa tu artista preferido.</li>
                <li>Ingresa tu canción favorita.</li>
                <li>¡Disfruta de la letra!</li>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
