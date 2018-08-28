import React from 'react';

const Skills = props => {
  const {id} = props;

  return (<div id={id} className="container-fluid bg-primary">
    <div className="row pt-5 pb-5">
      <div className="col-sm-12 mb-3">
        <h2 className="text-center text-white">Skills</h2>
        <hr className="bg-light mx-5"/>
      </div>
    </div>
    <div className="row pb-5 justify-content-center">
      <div className="col-md-4">
        <ul className="list-unstyled text-white">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript/ES6</li>
          <li>React</li>
          <li>Redux</li>
          <li>Webpack</li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="list-unstyled text-white">
          <li>Bootstrap/ Bootstrap Material Design</li>
          <li>Zurb Foundation</li>
          <li>Materialize</li>
          <li>Sketch</li>
          <li>Adobe XD</li>
          <li>Adobe Pro DC</li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="list-unstyled text-white">
          <li>Github</li>
          <li>Command Line</li>
          <li>VIM</li>
        </ul>
      </div>
    </div>
  </div>);
}

export default Skills;
