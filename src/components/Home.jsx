import React from 'react';
import { MDBContainer, MDBTypography } from 'mdb-react-ui-kit';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Me from 'IMG/profile.jpg';

let msg = "%c👋 Thank you for visiting my website!";
let styles= [ 
    "font-size: 12px", 
    "font-family: monospace", 
    "background: black", 
    "display: inline-block", 
    "color: #5DC1BE", 
    "padding: 8px 15px", 
    "border: 3px solid;" 
].join(";")

const Home = () => {
  console.log(msg, styles);
  return (
    <MDBContainer fluid className="app gx-0">
      <div id="home" className="px-4 px-sm-5 pt-4 pb-5 d-flex flex-column justify-content-center align-items-center">
      <img
          src={Me}
          alt='Profile image'
          width='170'
          className='rounded-circle shadow-3-strong me-3 mb-1'
        />
        <div className="text-center">
        <MDBTypography tag="h1" className="text-uppercase name">
          Kim Bell
        </MDBTypography>
        <MDBTypography tag="h2" className="mb-0">
          SDET | Software Engineer in Test
        </MDBTypography>
        <MDBTypography className="fs-4 mb-0">
          Specializing in Cypress Test Automation.
          Previous Software Engineer.
        </MDBTypography>
        </div>
      </div>
      <About id='about' />
      <Skills id='skills' />
      <Projects id='projects' />
    </MDBContainer>
  );
};

export default Home;
