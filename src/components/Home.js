import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

const Home = () => {
  return (
    <div className='container-fluid px-0'>
      <div className='jumbotron jumbotron-fluid pt-5 mb-0' id='home'>
        <div className='container text-center mt-5'>
          <h1 className='display-2 text-uppercase'>Kim Bell</h1>
          <h2 className='display-3'>SDET | Software Engineer in Test</h2>
          <h3>Focusing on Cypress. Previous Front End Developer.</h3>
        </div>
      </div>
      <About id='about' />
      <Skills id='skills' />
      <Projects id='projects' />
    </div>
  );
};

export default Home;
