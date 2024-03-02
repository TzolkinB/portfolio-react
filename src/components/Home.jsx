import React from 'react';
import { MDBContainer, MDBTypography } from 'mdb-react-ui-kit';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

const Home = () => {
  return (
    <MDBContainer fluid className="app px-0">
      <div id="home" className="pe-3 d-flex flex-row-reverse justify-content-between align-items-center">
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
        <div>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg" height={80}/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" height={80}/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" height={80}/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" height={80}/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" height={80}/>
        </div>
      </div>
      <About id='about' />
      <Skills id='skills' />
      <Projects id='projects' />
    </MDBContainer>
  );
};

export default Home;
