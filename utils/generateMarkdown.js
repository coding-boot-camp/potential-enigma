// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  let licenseBadge = ''
  switch (license) {
    case 'Apache License 2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'Eclipse Public License 1.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
      break;
    case 'MIT':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
    case 'Mozilla Public License 2.0':
      licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
      break;
    default:
      licenseBadge = ``
      break;
  }
  return licenseBadge
}

// If there is no license, return an empty string
function renderLicenseSection(license) { }

//Checking for undefined selections  
function checkIfUndefined(data){
  let dataValue;
  if(typeof data !== 'undefined'){
       dataValue = data;
  }else{
       dataValue = '';
  }
  return dataValue
}

    


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  return `#Title 
  ${data.title}

  #Description
  ${data.description}

  #Badges
  ${badge}

  #Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribute](#contribute)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

  #Type of Project
  ${data.typeOf}
  
  #Installation

  ${data.checkIfUndefined}

  #Usage
  ${data.usage}

  #Tests
  ${data.tests}

  #Contribute
  ${data.contribute}

  #License
  ${data.license}

  #Questions
  If you have any questions feel free to reach out through email or GitHub.
  GitHub: [${data.username}](https://github.com/${data.username})
  Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
