import React from "react";
import "./Home.css";
import img from "../../assets/avatar.png";
import styled from "styled-components";
import logo from "../../assets/Logos.png";
// import pdf from '../../assets/pdf.pdf'

const Highlight = styled.span`
  color: #d16587; /* Change 'red' to any color you prefer */
`;

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/pdf.pdf'; // Correct file path relative to the public folder
    link.setAttribute('download', 'pdf.pdf'); // Ensure the download attribute is set
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
 

  return (
    <>
      <div className="home">
        <div className="home-2">
          <img src={img} alt="" />
        </div>
        <div className="heading">
          <h1>
            I do code and <br />
            make content <Highlight>about it!</Highlight>
          </h1>
          <p>
            I am a seasoned full-stack developer with over <br />
            2 years of professional experience,specializing in backend
            development. <br />
            My expertise lies in crafting robust and scalable SaaS-based <br />
            architectures on the Amazon AWS platform.
          </p>

          <button className="btn">Get In Touch</button>
 
          <button className="btn" onClick={handleDownload}>Download CV</button>
          {/* <a href={pdf} className="btn" >Download CV</a> */}
        </div>
        <div className="heading-2">
          <h4>EXPERIENCE WITH</h4>
          <br />
          <br />
          <img src={logo} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
