import React from 'react';
import Me from 'IMG/profile.jpg';

const About = props => {
  const { id } = props;

  return (
    <div id={id}>
      <div className='section-padding'>
        <div className='row'>
          <div className='col-sm-12 mb-3'>
            <h2>About Me</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <img
              src={Me}
              alt='Profile image'
              height='120'
              width='120'
              className='rounded-circle float-left mr-4 mb-4'
            />
            <p className='pl-2 text-justify'>
              In 2022 I changed positions from a front-end developer to SDET.
              The company I worked for recently started investing in automation
              testing, mainly with Cypress. I was interested in helping
              integrate automation testing with Cypress into team processes so
              decided to make the switch. Since becoming an SDET, I have been
              able to gain new experiences such as adding test jobs to Gitlab's
              CI/CD pipeline with YAML, and creating a Bash script to add a
              required config for Cypress. I have also been able to use my
              existing experience with Javasscript and Typescript to write
              custom commands intended for team consumption in order to increase
              efficiency in writing tests. In my free time I continue becoming
              familiar with Gitlab, YAML, and Bash with a focus on CI/CD
              pipelines. When I am not coding I love to read and be outside
              enjoying my backyard!
            </p>
            <p>
              I am always looking for new opportunites so feel free to reach out
              to me: krbell4@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
