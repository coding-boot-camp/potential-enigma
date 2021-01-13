// Renders License badges
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

    


// Function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  return `# Title 
  ${data.title}

  # Description
  ${data.description}

  # Badges
  ${badge}

  # Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribute](#contribute)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

  # Type of Project
  ${data.typeOf}
  
  # Installation  <a name="installation"></a>

  ${checkIfUndefined(data.website)}  
  ${checkIfUndefined(data.installNode)}  
  ${checkIfUndefined(data.installOther)}


  # Usage  <a name="usage"></a>
  ${data.usage}

  # Tests  <a name="tests"></a>
  ${data.tests}

  # Contribute  <a name="contribute"></a>
  ${data.contribute}

  # License  <a name="license"></a>
  ${data.license}

  # Questions  <a name="questions"></a>
  If you have any questions feel free to reach out through email or GitHub.
  GitHub: [${data.username}](https://github.com/${data.username})
  Email: [${data.email}](mailto:${data.email})
`;
}


module.exports = generateMarkdown;
