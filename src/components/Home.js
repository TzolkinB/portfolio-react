import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

const Home = () => {
  return (<div id="portfolio">
    <header>
      <div id="home" className="container-fluid">
        <div className="jumpbotron jumbotron-fluid pt-5 py-4">
          <div className="container text-center">
            <h1 className="display-2 text-uppercase">Kimberly Bell</h1>
            <h2 className="display-3">Front End Developer</h2>
            <h2 className="display-4">React & JavaScript</h2>
          </div>
        </div>
      </div>
    </header>
  </div>)
};

export default Home;
