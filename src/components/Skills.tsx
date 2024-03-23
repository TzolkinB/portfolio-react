import { MDBTypography, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { cloudHosting, testingTools, terminalTools, webDevTools, getImage } from '../tech-icons';

const Skills = (props: { id: string}) => {
  const { id } = props;

  const mobileCol1 = ["Cypress","Testing Library", "Javascrpt", "Typescrpt", "React", "Git", "VIM", "Gitlab", "Bitbucket", "Github"]
  const mobileCol2 =["Webpack", "qtest", "Browsertack", "VSCode", "YAML", "Bash", "Ember", "HTML", "CSS", "Styled Components"]

  return (
    <div id={id} className="py-5">
      <MDBTypography tag="h3" className="text-center py-3">
        Skills
      </MDBTypography>
      <div className="skills-list d-none d-sm-flex flex-sm-wrap justify-content-center align-items-center">
        <>
          {testingTools.map(tool => {
            return getImage(tool)
          })}
        </>
        <>
          {webDevTools.map(tool => {
            return getImage(tool)
          })}
        </>
        <>
          {terminalTools.map(tool => {
            return getImage(tool)
          })}
        </>
        <>
          {cloudHosting.map(cloud => {
            return getImage(cloud)
          })}
        </>
      </div>
      <MDBRow center className="skills-mobile d-flex d-sm-none">
        <MDBCol size={6}>
          <ul>
            {mobileCol1.map(item => {
              return <li key={item}>{item}</li>
              })
            }
          </ul>
        </MDBCol>
        <MDBCol size={6}>
        <ul>
          {mobileCol2.map(item => {
              return <li key={item}>{item}</li>
            })
          } 
        </ul>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Skills;
