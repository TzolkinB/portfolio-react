import { MDBTypography } from 'mdb-react-ui-kit';
import Me from 'IMG/profile.jpg';

const About = props => {
  const { id } = props;

  return (
    <div id={id} className="py-5 px-4 px-sm-5">
      <MDBTypography tag='h3'>
        About Me
      </MDBTypography>
      <div className="d-lg-flex align-items-lg-start">
      <div className="float-start flex-lg-shrink-0">
        <img
          src={Me}
          alt='Profile image'
          height='120'
          width='120'
          className='rounded-circle me-3 mb-1'
        />
      </div>
      <div className="flex-lg-grow-1">
            {/* <p className='pl-2 text-justify'> */}
              In 2022 I changed positions from a front-end developer to SDET.
              The company I worked for recently started investing in automation
              testing, mainly with Cypress. I was interested in helping
              integrate automation testing with Cypress into team processes so
              decided to make the switch. Since becoming an SDET, I have been
              able to gain new experiences such as adding test jobs to Gitlab's
              CI/CD pipeline with YAML, and creating a Bash script to add a
              required config for Cypress. I have also been able to use my
              existing experience with Javascript and Typescript to write
              custom commands intended for team consumption in order to increase
              efficiency in writing tests. In my free time I continue becoming
              familiar with Gitlab, YAML, and Bash with a focus on CI/CD
              pipelines. When I am not coding I love to read and be outside
              
              I am always looking for new opportunites so feel free to reach out
              to me: krbell4@gmail.com
          </div>
          {/* Why remote only? */}
          {/* My Testing -- what is it from testing library? */}
          {/* Why not BDD () Gherkin or POM (page object model)? */}
          {/* Why Cypress? */}
        </div>
    </div>
  );
};

export default About;
