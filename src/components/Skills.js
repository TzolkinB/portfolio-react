import React from 'react';

const Skills = props => {
  const { id } = props;

  return(
    <div id={id} className="container-fluid"> 
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
  );
}

export default Skills;
