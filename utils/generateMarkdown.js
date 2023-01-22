// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

  
  ## Table of Contents
  1. [ Description ](#desc)
  2. [ Installation ](#install)
  3. [ Usage Tips ](#usage)
  4. [ License ](#license)
  5. [ Contributors ](#contrib)
  6. [ Testing ](#test)
  7. [ Questions? ](#questions)

  
  <a name="desc"></a>
  ## Description
  ${data.description}


  <a name="install"></a>
  ## Installation
  ${data.install}
  

  <a name="usage"></a>
  ## Usage
  ${data.usage}
  

  <a name="license"></a>
  ## License
  ${data.license}
  

  <a name="contrib"></a>
  ## Contributors
  ${data.contributors}
  

  <a name="test"></a>
  ## Testing
  ${data.test}
  

  <a name="questions"></a>
  ## Questions?
  ${data.github}
  
  ${data.email}
  
  
  ${data.questions}
  

`;
}

module.exports = {generateMarkdown};
