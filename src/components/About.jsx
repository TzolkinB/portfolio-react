import { MDBTypography, MDBListGroup, MDBListGroupItem, MDBBadge } from 'mdb-react-ui-kit';
// import Me from 'IMG/profile.jpg';

const About = props => {
  const { id } = props;

  return (
    <div id={id} className="py-5 d-flex flex-column align-items-center">
      <div>
      <MDBTypography tag='h3' className="text-white">
        About Me
      </MDBTypography>
      </div>
      <MDBTypography className="fw-light">
        In 2022 I changed positions from a Senior Software Engineer working on Web UI to an SDET for automation testing. We used Cypress in conjunction with Testing-Library since it was already being used with Jest and was an easy way to add some accessibility coverage.
      </MDBTypography>
      <ul className="fw-light" style={{ minWidth: '22rem' }}>
      <li>implimenting and assisting in the transition from what was a one hundred percent manual process to a heavily automated testing process in the web space.</li>
      <li>created and maintained a "Best Practices and Standards Guide" for Ally's implimentation of the framework and tools they were using. For example, I identified patterns used for common UI elements and added examples to ensure not only ease of adoption but also that all departments would meet the same quality and expectations.</li>
      <li>worked on and helped maintain a global internal npm package that was used by 10 plus teams and multiple departments.</li>
      <li> test jobs to Gitlab's CI/CD pipeline with YAML,</li>
      <MDBBadge pill light color='primary'>
          Onboarding
        </MDBBadge>
      <li> created a Bash script to add a required config for Cypress.</li>
      <li>experience with Javascript and Typescript to write custom commands intended for team consumption in order to increaseefficiency in writing tests.</li>
      </ul>
         {/* My initial focus was on implimenting and assisting in the transition from what was a one hundred percent manual process to a heavily automated testing process in the web space. It was during this time that I created and maintained a "Best Practices and Standards Guide" for Ally's implimentation of the framework and tools they were using. For example, I identified patterns used for common UI elements and added examples to ensure not only ease of adoption but also that all departments would meet the same quality and expectations. 
        In addition to training teams and individuals, my move to SDET has allowed me to gain a lot of experience in various other skills. I frequently worked on and helped maintain a global internal npm package that was used by 10 plus teams and multiple departments. This required knowledge of webpack as well as Javascript and Typescript. I added test jobs to Gitlab's CI/CD pipeline with YAML, and created a Bash script to add a required config for Cypress. I also used my experience with Javascript and Typescript to write custom commands intended for team consumption in order to increaseefficiency in writing tests.   */}
      <div>
        When I am not coding I love to read and be outside
        
        I am always looking for new opportunites so feel free to reach out
        to me: krbell4@gmail.com
      </div>
      {/* TODO: */}
          {/* Why remote only? */}
          {/* My Testing -- what is it from testing library? */}
          {/* Why not BDD () Gherkin or POM (page object model)? */}
          {/* Why Cypress? */}
    </div>
  );
};

export default About;
