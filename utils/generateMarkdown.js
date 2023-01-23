// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 const licenseLink = renderLicenseLink(license);
  if (license === "Apache License 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${licenseLink})`
  } else if (license === "GNU (GPL)") {
    return `[![License](https://img.shields.io/badge/License-GPLv3-green.svg)](${licenseLink})`
  } else if (license === "MIT license") {
    return `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](${licenseLink})`
  } 
  return ""
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache License 2.0") {
    return "https://opensource.org/licenses/Apache-2.0"
  } else if (license === "GNU (GPL)") {
    return "https://www.gnu.org/licenses/gpl-3.0"
  } else if (license === "MIT license") {
    return "https://opensource.org/licenses/MIT"
  } 
  return ""
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  }
  return `<a name="license"></a>
  ## License
  [${license}](${renderLicenseLink(license)})`
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  
  ${renderLicenseBadge(data.license)}

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
  

  ${renderLicenseSection(data.license)}
  

  <a name="contrib"></a>
  ## Contributors
  ${data.contributors}
  

  <a name="test"></a>
  ## Testing
  ${data.test}
  

  <a name="questions"></a>
  ## Questions?
  GitHub: [${data.github}](https://github.com/${data.github})

  
  Email: ${data.email}
  

  ${data.questions}
  

`;
}

module.exports = { generateMarkdown };
