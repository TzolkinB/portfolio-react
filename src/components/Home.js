import React  from 'react';
import Card   from './shared/CardContainer';
import Me     from 'IMG/profile.jpg';
import Resume from 'IMG/Bell_Kim-ResumePublic.pdf';

const Home = () => {
  return(
    <div>
      <div className="text-center padding-top" id="home">
        <h1>Kimberly Bell</h1>
        <h2>Front End Developer</h2>
        <h3>
          <a href="https://github.com/TzolkinB" target="_blank" className="pr-2">Github</a>
           |
          <a href="https://www.linkedin.com/in/kimbell4" target="_blank" className="px-2">LinkedIn</a> 
           |
          <a href={Resume} target="_blank" className="pl-2">Resume</a>
        </h3>
      </div>
      <div id="about" className="container-fluid"> 
        <div className="section-padding">
          <div className="row">
            <div className="col-sm-12 mb-3">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <img src={Me} alt="Profile image" height="120" width="120" className="rounded-circle float-left mr-4"/>
              <p className="pl-2">I am a front-end developer and I love using ES6 and the React ecosystem.
              In my current job, I often convert html files into react components, including implementing components from the chosen
              css framework. I also add javascript to the initial prototype applications intended for client approval.
              Additional tasks include updating existing code with structure and style changes as nessessary. In
              my free time I continue to deepen my understanding of Javascript and learn Node. 
              When I am not coding I love to read and be outside enjoying my backyard!</p>
              <p>I am always looking for new opportunites so feel free to reach out to me: krbell4@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div id="skills" className="container-fluid"> 
        <div className="section-padding">
          <div className="row">
            <div className="col-sm-12 mb-3">
              <h2 className="text-center">Skills</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
            </div>
            <div className="col-sm-10">
              <ul className="skills-col mb-0">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript/ES6</li>
                <li>React</li>
                <li>Redux</li>
                <li>Webpack</li>
                <li>Bootstrap/ Bootstrap Material Design</li>
                <li>Zurb Foundation</li>
                <li>Materialize</li>
                <li>Github</li>
                <li>VIM</li>
                <li>Sketch</li>
                <li>Adobe XD</li>
                <li>Adobe Pro DC</li>
              </ul>
            </div>
            <div className="col-sm-1">
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className="container-fluid">
        <div className="section-padding"> 
          <div className="row">
            <div className="col-sm-12 mb-3">
              <h2 className="text-center">Projects</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <Card 
              title="Hazmat"
              subtitle="Material Design Library"
              text="Library of React components based on Material Design guidelines for use by Tax Management Associates, Inc."
              url="https://qa-tma1.works/hazmat/"
              urlText="Demo"
            />
            <Card
              title="React Starter Template"
              subtitle="Uses Webpack"
              text="Basic template for getting new applications up and running quickly."
              url="https://github.com/TzolkinB/react-template"
              urlText="Github Repo"
            />
            <Card
              title="Memory Game"
              subtitle="Uses React, Webpack, Bootstrap Material Design"
              text="Traditional memory card game for use by two players that declares a winner and can be replayed multiple times."
              url="https://memory-game1234.firebaseapp.com/#/"
              urlText="Demo"
              url2="https://github.com/TzolkinB/memory"
              url2Text="GithubRepo"
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
