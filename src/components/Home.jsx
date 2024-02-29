import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

const Home = () => {
  const img = document.getElementById('home')
  console.log('img', img)
  return (
    <div className='container-fluid px-0'>
      <div id='home'>
      <div className='mask' style={{backgroundColor:"rgba(0,0,0, 0.5)", height:"300px"}}>
        <div className='container text-white pt-5'>
          <h1 className='text-uppercase'>Kim Bell</h1>
          <h2>SDET | Software Engineer in Test</h2>
          <h3>Cypress Test Automation. Previous Front End Developer.</h3>
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
