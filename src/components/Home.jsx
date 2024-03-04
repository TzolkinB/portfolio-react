import React from 'react';
import { MDBContainer, MDBTypography } from 'mdb-react-ui-kit';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

const Home = () => {
  return (
    <MDBContainer fluid className="app gx-0">
      <div id="home" className="px-5 d-flex justify-content-end align-items-end align-items-sm-center">
        <div className="text-end">
        <MDBTypography tag="h1" className="text-uppercase name">
          Kim Bell
        </MDBTypography>
        <MDBTypography tag="h2" className="mb-0">
          SDET | Software Engineer in Test
        </MDBTypography>
        <MDBTypography className="fs-4 mb-0">
          Cypress Test Automation
        </MDBTypography>
        <MDBTypography className="fs-4 mb-0">
          Previous Front End Developer
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
