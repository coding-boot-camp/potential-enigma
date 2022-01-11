const generateInstall = installText => {
  if (!installText) {
    return ''
  } else {
    return `## Installation
  ${installText}
  `
  }
}
const generateContribute = contributeText => {
  if (!contributeText) {
    return ''
  } else {
    return `## Contributions
  ${contributeText}
  `
  }
}
const generateTesting = testText => {
  if (!testText) {
    return ''
  } else {
    return `## Testing
  ${testText}
  `
  }
}
const installCheck = check => {
  if (!check) {
    return '';
  } else {
    return `* [Installation](#installation)`
  }
}
const contributeCheck = check => {
  if (!check) {
    return '';
  } else {
    return `* [Contributions](#contributions)`
  }
}
const testCheck = check => {
  if (!check) {
    return '';
  } else {
    return `* [Testing](#testing)`
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ![GitHub](https://img.shields.io/github/license/${data.githubUsername}/${data.title})
  # ${data.title}
  ## Description
  ${data.about}
  ## Table of Contents
  ${installCheck(data.install)}
  * [Usage](#usage)
  * [License](#license)
  ${contributeCheck(data.contribution)}
  ${testCheck(data.testing)}
  * [Questions](#questions)
  
  ${generateInstall(data.install)}
  ## Usage
  ${data.usage}
  ## License
  * This application is covered under the ${data.license} license
  ${generateContribute(data.contribution)}
  ${generateTesting(data.testing)}
  ## Questions
  Created by: [${data.githubUsername}](${data.gitLink})
  
  If you have any further questions please feel free to contact me at [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;
