import React from 'react';
import Me from 'IMG/profile.jpg';

const About = (props) => {
  const { id } = props;

  return (
    <div id={id}>
      <div className='container section-padding'>
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
              width='15%'
              className='rounded-circle float-left mr-3 mb-1'
            />
            <p className='text-justify'>
              In 2022 I moved from front-end developer to SDET, since I had an
              interest in Cypress and wanted to integrate automation testing
              into team processes. Since becoming an SDET, I have been able to
              gain new experiences such as adding test jobs to Gitlab's CI/CD
              pipeline with YAML, and creating a Bash script to add a required
              config for Cypress. I have also used my existing
              experience with Javascript and Typescript to write custom commands
              for team consumption to increase efficiency in
              writing tests. In my free time I continue becoming familiar with
              Gitlab, YAML, and Bash with a focus on the CI/CD pipeline. When I am
              not coding I love to read and be outside enjoying my backyard!
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
