import React    from 'react';
import About    from './About';
import Skills   from './Skills';
import Projects from './Projects';

const Home = () => {
  return(
    <div>
      <div className="text-center padding-top" id="home">
        <h1>Kimberly Bell</h1>
        <h2>Front End Developer</h2>
      </div>
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
    </div>
  )
};

export default Home;
