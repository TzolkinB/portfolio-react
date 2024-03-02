import React from 'react';
import { MDBTypography, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Qtest from 'IMG/qtest.svg';

const Skills = props => {
  const { id } = props;

  const getImage = (tool) => {
    const cloudImages = { "gitlab": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original-wordmark.svg" alt="gitlab" height={70}/>,
    "bitbucket":            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original-wordmark.svg" alt="bitbucket" height={70}/>,
    "github":            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" alt="github" height={70}/>
    }
    return cloudImages[tool]
  }
  // [ "webpack" "yaml", "bash",

  // Testing tools: ["Cypress", "Testing-Library", "qtest", "Browserstack"]
  const cloudHosting = ["gitlab", "bitbucket", "github"]
  // Web/Dev tools: ["Javascript", "Typescript", "React", "Git", "Command Line", "VIM", "vscode","ember", "html", "css", "styled-components" ]

  return (
    <div id={id} className="py-5 px-4 px-sm-5">
      <MDBTypography tag="h3" className="text-center">
        Skills
      </MDBTypography>
      <MDBRow center className="skills-list d-none d-sm-flex">
        {/* Testing Tools */}
        <MDBCol size={2}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original-wordmark.svg" alt="cypress" height={70}/>
              <p>Testing-Library</p>
              <img src={Qtest} alt="qtest" width="40" height="40" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/browserstack/browserstack-original-wordmark.svg" alt="browserstack" height={50}/>
        </MDBCol>
        {/* Web/Dev tools */}
        <MDBCol size={2}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="javascript" height={50}/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="typescript" height={50}/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="react" height={50}/>
          </MDBCol>
          {/* Cloud Hosted Repositories */}
          <MDBCol size={2}>
                {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original-wordmark.svg" alt="gitlab" height={50}/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original-wordmark.svg" alt="bitbucket" height={50}/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" alt="github" height={50}/> */}
                {cloudHosting.map(cloud => {
                  return getImage(cloud)
                })}
          </MDBCol>
          <MDBCol size={2}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" alt="git" height={50}/>
              <p>Command Line</p>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original-wordmark.svg" alt="webpack" height={50}/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vim/vim-original.svg" alt="vim" height={50}/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yaml/yaml-original.svg" alt="yaml" height={50}/>
          </MDBCol>
          <MDBCol size={2}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg" alt="vscode" height={50}/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" alt="bash" height={50}/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ember/ember-original-wordmark.svg" alt="ember" height={50}/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt="html" height={50}/>
              <p>CSS / Styled Components</p>
          </MDBCol>
          </MDBRow>
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
