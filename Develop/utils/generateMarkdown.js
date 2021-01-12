// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  let licenseBadge = ''
  switch (license) {
    case 'Apache License 2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'GNU General Public License v3.0':
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      break;
    case 'MIT':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
    case 'The Unlicense':
      licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
      break;
    default:
      licenseBadge = ``
      break;
  }
  return licenseBadge
}

// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  return `#Title 
  ${data.title}

  ## Description
  ${data.description}

  #Badges
  ${badge}

  ##Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

  #Type of Project
  ${data.typeOf}

  
  ${data.website}

  #Installation
  ${data.installNode}

  
  ${data.installOther}

  #Usage
  ${data.usage}

  #Tests
  ${data.tests}

  #Contribute
  ${data.contribute}

  #License
  ${data.license}

  #Username 
  ${data.username}

  #Email
  ${data.email}
`;
}

module.exports = generateMarkdown;
