// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log('Inisder render badge!!!', license)
  var link;
  if(license === 'MIT'){
    link = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    console.log("license link");

  }
  else if (license === 'The GPL') {
    link = '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
    console.log("license link");
  }
  else if (license === 'Mozilla Public License') {
    link = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    console.log("license link");
  }
  else if (license === 'Boost Software License') {
    link = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    console.log("license link");
  }
  else {
    console.log ("no link")
    link = ''
  }
  return link
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log('Inisder render badge!!!', license)
  var link;
  if(license === 'MIT'){
    link = '(https://choosealicense.com/licenses/mit)'
    console.log("license link");

  }
  else if (license === 'The GPL') {
    link = '(https://choosealicense.com/licenses/gpl-3.0/)'
    console.log("license link");
  }
  else if (license === 'Mozilla Public License') {
    link = '(https://choosealicense.com/licenses/mpl-2.0/)'
    console.log("license link");
  }
  else if (license === 'Boost Software License') {
    link = '(https://choosealicense.com/licenses/bsl-1.0/)'
    console.log("license link");
  }
  else {
    console.log ("no link")
    link = ''
  }
  return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === ''){
    console.log("license link empty")
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
//renderLicenseLink (data.license);
var badge = renderLicenseBadge(data.license);
var link = renderLicenseLink(data.license);
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions]($questions)
  ## Installation
  ${data.installation}
  ## Usage
  
  ## License
 ${badge}
 ${link}
  ## My Github
    github:[${data.git}]()
`;
}

module.exports = generateMarkdown;
