// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ![License](https://img.shields.io/badge/license-${data.license}-informational "License Badge")

  # ${data.title}  

  ## Description:  

  ## Table of Contents

  - [Installation](#installation)  
  - [Usage](#usage)  
  - [Credits](#credits)  
  - [License](#license)  
  - [Contribution](#contributing)  
  - [Tests](#tests)  
  - [Questions](#questions)  

  ### Installation:  
  ${data.installation}  

  ### Usage:  
  ${data.usage}  

  ### Credits:  
  ${data.credits}  

  ### License:
  This app utilizes a ${data.license} license.
  Find out more at [License](https://opensource.org/licenses/${data.license})
 
  ### Contributing:  
  ${data.contributing}  

  ### Tests:  
  ${data.tests}  
  
  ### Questions:  
  To check out my other projects, please visit my Github profile:  
  - [Github Profile](https://github.com/${data.github})  
  
  For further questions, please send me an email:  
  - [Email](${data.email})


`;
}

module.exports = generateMarkdown;
