// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge= '';
  if (license === 'MIT') {
    badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
 } else if (license === 'GNU AGPLv3') {
    badge = '![License: AGPL] v3(https://img.shields.io/badge/License-AGPL_v3-blue.svg)';
} else if (license === 'GNU GPLv3') {
  badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
} else if (license === 'GNU LGPLv3') {
  badge = '![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)';
} else if (license === 'Mozilla') {
  badge = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
} else if (license === 'Apache') {
  badge = '![License: Apache] (https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
} else if (license === 'Boost') {
  badge = '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
} else if (license === 'Unlicense') {
  badge = '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
} else if (license === 'None') {
  badge = '';
}
return badge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '(https://opensource.org/licenses/MIT)';
 } else if (license === 'GNU AGPLv3') {
    return '(https://www.gnu.org/licenses/agpl-3.0)';
} else if (license === 'GNU GPLv3') {
  return '(https://www.gnu.org/licenses/gpl-3.0)';
} else if (license === 'GNU LGPLv3') {
  return '(https://www.gnu.org/licenses/lgpl-3.0)';
} else if (license === 'Mozilla') {
  return '(https://opensource.org/licenses/MPL-2.0)';
} else if (license === 'Apache') {
  return '(https://opensource.org/licenses/Apache-2.0)';
} else if (license === 'Boost') {
  return '(https://www.boost.org/LICENSE_1_0.txt)';
} else if (license === 'Unlicense') {
  return '(http://unlicense.org/)';
} else if (license === 'None') {
  return '';
}
};



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#install)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contributionInfo)
  * [Tests](#testing)
  * [Questions](#anyQuestions)
  
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  This application is under the license of ${data.license}
  ${renderLicenseLink(data.license)}
  

  ## Contribution
  If you would like to contribute, please use these guidelines: ${data.contributionInfo}

  ## Tests
  To run tests, please use these guidelines: ${data.testing}

  ## Questions
  If you have any further questions, use the following links: ${data.anyQuestions}
  Github: [${data.username}](https://github.com/${data.username})
  GitHub repository: [${data.title}](https://github.com/${data.username}/${data.title})
  Email: [${data.email}](mailto:${data.email})

`;

return markdownTemplate;
}

module.exports = generateMarkdown;
