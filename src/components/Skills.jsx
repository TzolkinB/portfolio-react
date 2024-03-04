import { MDBTypography, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Qtest from 'IMG/qtest.svg';
import TestingLib from 'IMG/octopus.png'
import StyledComp from 'IMG/styled-components.png'

const Skills = props => {
  const { id } = props;

  const cloudHosting = ["gitlab", "bitbucket", "github"]
  const testingTools = ["cypress", "testing-library", "qtest", "browserstack"]
  
  const getImage = (tool) => {
    const mapImages = { 
      "gitlab": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original-wordmark.svg" alt="gitlab" height={60}/>,
      "bitbucket": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original-wordmark.svg" alt="bitbucket" height={60}/>,
      "github": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" alt="github" height={60}/>,
      "cypress": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original-wordmark.svg" alt="cypress" height={90}/>,
      "testing-library": <img src={TestingLib} alt="testing library" width="60" height="60" />,
      "qtest": <img src={Qtest} alt="qtest" width="50" height="50" />,
      "browserstack": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/browserstack/browserstack-original-wordmark.svg" alt="browserstack" height={60}/>
      
    }
    return mapImages[tool]
  }
  // [ "webpack" "yaml", "bash",
  // Web/Dev tools: ["Javascript", "Typescript", "React", "Git", "Command Line", "VIM", "vscode","ember", "html", "css", "styled-components" ]

  return (
    <div id={id} className="py-5 px-4 px-sm-5">
      <MDBTypography tag="h3" className="text-center">
        Skills
      </MDBTypography>
      {/* <MDBRow center className="skills-list d-none d-sm-flex"> */}
      <div className="skills-list d-none d-sm-flex flex-sm-wrap justify-content-evenly align-items-center">
        {/* Testing Tools */}
        {/* <MDBCol size={2}> */}
        <div>
          {testingTools.map(tool => {
            return getImage(tool)
          })}
          </div>
        {/* </MDBCol> */}
        {/* Web/Dev tools */}
        {/* <MDBCol size={2}> */}
        <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="javascript" height={60}/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="typescript" height={60}/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="react" height={60}/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg" alt="webpack" height={60}/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg" alt="vscode" height={60}/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ember/ember-original-wordmark.svg" alt="ember" height={60}/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt="html" height={60}/>
          <img src={StyledComp} alt="styled components" width="60" height="60" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" alt="css" height={60}/>
        {/* </MDBCol> */}
        </div>
        {/* <MDBCol size={2}> */}
        <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" alt="git" height={60}/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yaml/yaml-original.svg" alt="yaml" height={60}/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vim/vim-original.svg" alt="vim" height={60}/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" alt="bash" height={60}/>
        </div>
        {/* </MDBCol> */}
        {/* Cloud Hosted Repositories */}
        {/* <MDBCol size={2}> */}
        <div>
          {cloudHosting.map(cloud => {
            return getImage(cloud)
          })}
        </div>
        {/* </MDBCol> */}
        {/* </MDBRow> */}
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
