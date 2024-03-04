import Qtest from 'IMG/qtest.svg';
import TestingLib from 'IMG/octopus.png'
import StyledComp from 'IMG/styled-components.png'

export const cloudHosting = ["gitlab", "bitbucket", "github"]
export const testingTools = ["cypress", "testing-library", "qtest", "browserstack"]
export const terminalTools = ["git", "yaml", "vim", "bash"]
export const webDevTools = ["js", "ts", "react", "webpack", "vscode", "ember", "html", "styled-components","css"]
  
export const getImage = (tool) => {
  const mapImages = { 
    "gitlab": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original-wordmark.svg" alt="gitlab" height={60}/>,
    "bitbucket": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original-wordmark.svg" alt="bitbucket" height={60}/>,
    "github": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" alt="github" height={60}/>,
    "cypress": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original-wordmark.svg" alt="cypress" height={90}/>,
    "testing-library": <img src={TestingLib} alt="testing library" width="60" height="60" />,
    "qtest": <img src={Qtest} alt="qtest" width="50" height="50" />,
    "browserstack": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/browserstack/browserstack-original-wordmark.svg" alt="browserstack" height={60}/>,
    "git": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" alt="git" height={60}/>,
    "yaml": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yaml/yaml-original.svg" alt="yaml" height={60}/>,
    "vim": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vim/vim-original.svg" alt="vim" height={60}/>,
    "bash": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" alt="bash" height={60}/>,
    "js": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="javascript" height={60}/>,
    "ts": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="typescript" height={60}/>,
    "react": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="react" height={60}/>,
    "webpack": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg" alt="webpack" height={60}/>,
    "vscode": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg" alt="vscode" height={60}/>,
    "ember": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ember/ember-original-wordmark.svg" alt="ember" height={60}/>,
    "html": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt="html" height={60}/>,
    "styled-components": <img src={StyledComp} alt="styled components" width="60" height="60" />,
    "css": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" alt="css" height={60}/>
    }
    return mapImages[tool]
  }