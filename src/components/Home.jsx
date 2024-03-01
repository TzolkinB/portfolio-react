import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

const Home = () => {
  return (
    <div className='container-fluid px-0'>
      <div id='home'>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg" height={80}/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" height={80}/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" height={80}/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" height={80}/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" height={80}/>

        <div className='container text-white pt-5'>
          <h1 className='text-uppercase'>Kim Bell</h1>
          <h2>SDET | Software Engineer in Test</h2>
          <h3>Cypress Test Automation. Previous Front End Developer.</h3>
        </div>
      </div>
      <About id='about' />
      <Skills id='skills' />
      <Projects id='projects' />
    </div>
  );
};

export default Home;
