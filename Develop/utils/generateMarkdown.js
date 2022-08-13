function renderLicenseBadge(license) {
    if (!license) {
      return ``;
    } else {
      return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
    }
  }
  
  // Returns the license link
  function renderLicenseLink(license) {
    if (license === 'MIT') {
      return `https://lbesson.mit-license.org/`
    }
  }
  
  
  
  function renderLicenseSection(license) {
    return `${renderLicenseBadge(license)} ${renderLicenseLink(license)}`
  
  }
  
   
  const generateMarkdown = ({description,usage,installation,license,contributing,test}) => {
   
  
     return `#  ${description}

  
  ## Description

  
  ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  ${installation}
  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
  
  ## Usage
  
  ${usage}
  
  Provide instructions and examples for use. Include screenshots as needed.
  
   To add a screenshot, create an \`\`\ folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
  
       \`\`\`\
       
       \`\`\`\
  
   ## Credits
   ${contributing}
  
  List your collaborators, if any, with links to their GitHub profiles.
  
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  
  If you followed tutorials, include links to those here as well.
  
  ## License
  
  ${renderLicenseSection(license)}
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  
  
  
  ---
  
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  
  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  ## Features
  
  If your project has a lot of features, list them here.
  
  ## How to Contribute
  
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  
  ## Tests
  ${test}
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.
  
  `;
  }
  

  
  

module.exports = generateMarkdown;
