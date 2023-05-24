import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

const Home = () => {
  return (
    <div className='container-fluid px-0'>
      {/* <div className='jumbotron jumbotron-fluid pt-5 mb-0' id='home'>
        <div className='container text-end mt-5'>
          <h1 className='display-2 text-uppercase'>Kim Bell</h1>
          <h2 className='display-3'>SDET | Software Engineer in Test</h2>
          <h3>Cypress Test Automation. Previous Front End Developer.</h3>
        </div>
      </div> */}
      <div className="mask" id='home'>
      <div className="d-flex justify-content-end align-items-center">
        <div className="text-white">
          <h1 className="mb-3 text-uppercase">Kim Bell</h1>
          <h2 className="mb-3">SDET | Software Engineer in Test</h2>
          <h3>Cypress Test Automation. Previous Front End Developer.</h3>
          {/* <h1 className="mb-3">Heading</h1> */}
          {/* <h4 className="mb-3">Subheading</h4> */}
        </div>
      </div>
      </div>
      <About id='about' />
      <Skills id='skills' />
      <Projects id='projects' />
    </div>
  );
};

export default Home;
