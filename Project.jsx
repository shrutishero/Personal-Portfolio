import React from "react";
import logo1 from "../../assets/1st Project.png";
import logo2 from "../../assets/2nd Project.png";
import "./Project.css";

const Project = () => {
  return (
    <>
      <div className="project">
        <div className="project-logo">
          <h1>PROJECTS</h1>
        </div>
        <br />
        <br />
        <div className="caption">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
        </div>
      </div>
    </>
  );
};

export default Project;
