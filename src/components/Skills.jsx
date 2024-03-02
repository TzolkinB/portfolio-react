import React from 'react';

const Skills = props => {
  const { id } = props;

  return (
    <div id={id}>
      <div className='section-padding'>
        <div className='row'>
          <div className='col-sm-12 mb-3'>
            <h2 className='text-center'>Skills</h2>
          </div>
        </div>
        <div className='row skills-list'>
          <div className='col-md-2'></div>
          <div className='col-md-2'>
            <ul>
              <li>Cypress</li>
              <li>Testing-Library</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>React</li>
            </ul>
          </div>
          <div className='col-md-2'>
            <ul>
              <li>Gitlab</li>
              <li>Bitbucket</li>
              <li>qtest</li>
              <li>Browserstack</li>
              <li>VSCode</li>
            </ul>
          </div>
          <div className='col-md-2'>
            <ul>
              <li>Git</li>
              <li>Command Line</li>
              <li>Webpack</li>
              <li>VIM</li>
              <li>YAML</li>
            </ul>
          </div>
          <div className='col-md-2'>
            <ul>
              <li>Bash</li>
              <li>Ember</li>
              <li>HTML</li>
              <li>CSS / Styled Components</li>
            </ul>
          </div>
          <div className='col-md-2'></div>
        </div>
        <div className='skills-mobile'>
          <div className='row'>
            <div className='col-1'></div>
            <div className='col-5'>
              <ul>
                <li>Cypress</li>
                <li>Testing-Library</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>React</li>
                <li>Git</li>
                <li>Command Line</li>
                <li>VIM</li>
                <li>Gitlab</li>
                <li>Bitbucket</li>
              </ul>
            </div>
            <div className='col-5'>
              <ul>
                <li>Webpack</li>
                <li>qtest</li>
                <li>Browserstack</li>
                <li>VSCode</li>
                <li>YAML</li>
                <li>Bash</li>
                <li>Ember</li>
                <li>HTML</li>
                <li>CSS / Styled Components</li>
                <li>Sketch</li>
              </ul>
            </div>
            <div className='col-1'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
