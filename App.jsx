import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import Project from "./component/Project/Project";
import Experience from "./component/Experience/Experience";
import Contact from "./component/Contact/Contact";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Project />
      <Experience />
      <Contact />
    </>
  );
};

export default App;
