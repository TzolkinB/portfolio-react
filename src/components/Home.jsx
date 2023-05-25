import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

const Home = () => {
  return (
    <div>
      <div id='home'>
        <div className='mask' style={{backgroundColor:"rgba(0,0,0, 0.5)", height:"300px"}}>
          <div className='text-white pt-3 pt-md-5 pr-3 mr-0 mr-md-3'>
            <h1 className='text-uppercase'>Kim Bell</h1>
            <h2>SDET | Software Engineer in Test</h2>
            <p className='lead mb-0'>Cypress Test Automation</p>
            <p className='lead mb-0'>Front End Developer turned SDET</p>
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
