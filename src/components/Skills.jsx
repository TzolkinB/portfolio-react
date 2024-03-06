import { MDBTypography, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { cloudHosting, testingTools, terminalTools, webDevTools, getImage } from '../tech-icons';

const Skills = props => {
  const { id } = props;

  return (
    <div id={id} className="py-5">
      <MDBTypography tag="h3" className="text-center">
        Skills
      </MDBTypography>
      <div className="skills-list d-none d-sm-flex flex-sm-wrap justify-content-evenly align-items-center">
        <div>
          {testingTools.map(tool => {
            return getImage(tool)
          })}
          </div>
        <div>
          {webDevTools.map(tool => {
            return getImage(tool)
          })}
        </div>
        <div>
          {terminalTools.map(tool => {
            return getImage(tool)
          })}
        </div>
        <div>
          {cloudHosting.map(cloud => {
            return getImage(cloud)
          })}
        </div>
        </div>
        <MDBRow center className="skills-mobile d-flex d-sm-none">
          <MDBCol size={4}>
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
              </MDBCol>
              <MDBCol size={4}>
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
              </ul>
              </MDBCol>
              </MDBRow>
        </div>
  );
};

export default Skills;
