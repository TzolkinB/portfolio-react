import React from 'react';
import Me    from 'IMG/profile.jpg';

const Home = () => {
  return(
    <div>
      <div className="text-center padding-top" id="home">
        <h1>Kimberly Bell</h1>
        <h2>Front End Developer</h2>
        <h3>
          <a href="https://github.com/TzolkinB" target="_blank">Github</a>
           |
          <a href="https://www.linkedin.com/in/kimbell4" target="_blank">LinkedIn</a> 
        </h3>
      </div>
      <div id="about" className="container-fluid"> 
        <div className="row about-pt">
          <div className="col-sm-6">
            <h3>About</h3>
            <img src={Me} alt="Profile image" height="150" width="150" className="rounded-circle"/>
          </div>
          <div className="col-sm-6">
            <h3>Skills</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript/ES6</li>
              <li>React, Redux</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
