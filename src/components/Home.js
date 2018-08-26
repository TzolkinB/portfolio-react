import React    from 'react';
import About    from './About';
import Skills   from './Skills';
import Projects from './Projects';

const Home = () => {
  return(
    <div className="container-fluid px-0">
      <div className="jumbotron jumbotron-fluid mb-0" id="home">
        <div className="container text-center">
          <h1 className="display-4">Kimberly Bell</h1>
          <p className="lead">Front End Developer</p>
        </div>
      </div>
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
    </div>
  )
};

export default Home;
