import React from 'react';
import Me    from 'IMG/profile.jpg';

const Home = () => {
  return(
    <div>
      <div className="text-center padding-top" id="home">
        <h1>Kimberly Bell</h1>
        <h2>Front End Developer</h2>
        <h3>
          <a href="https://github.com/TzolkinB" target="_blank" className="pr-2">Github</a>
           |
          <a href="https://www.linkedin.com/in/kimbell4" target="_blank" className="pl-2">LinkedIn</a> 
        </h3>
      </div>
      <div id="about" className="container-fluid"> 
        <div className="row section-padding">
          <div className="col-sm-6">
            <h3>About</h3>
              <img src={Me} alt="Profile image" height="120" width="120" className="rounded-circle float-left mr-3"/>
              <p className="pl-2">I am a front-end developer and love using ES6 and the React ecosystem. In
              my free time I continue to deepen my understanding of Javascript and learn Node. 
              When I am not coding I love to read and be outside enjoying my backyard!</p>
          </div>
          <div className="col-sm-6">
            <h3>Skills</h3>
            <ul className="skills-col">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript/ES6</li>
              <li>React, Redux</li>
              <li>Webpack</li>
              <li>Github</li>
              <li>VIM</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="projects" className="container-fluid"> 
        <div className="row section-padding">
        </div>
      </div>
    </div>
  )
};

export default Home;
