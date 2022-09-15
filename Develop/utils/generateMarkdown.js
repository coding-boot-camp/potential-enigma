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
1. [ Description. ](#desc)
2. [ Installation Instructions. ](#install)
3. [ Usage Info. ](#usage)
4. [ Contribution Guidelines. ](#contr)
5. [ Test Instructions. ](#test)
6. [ Questions. ](#questions)

<a name="desc"></a>
## Description 
${data.description}

<a name="install"></a>
## Installation Instructions
${data.install}

<a name="usage"></a>
## Usage Information
${data.usage}

<a name="contr"></a>
## Contribution Guidelines
${data.contribution}

<a name="test"></a>
## Test Instructions
${data.test}

<a name="questions"></a>
## Questions
Name: ${data.name}
Username: ${data.github}
GitHub URL: <a href= "https://github.com/${data.github}"> </a>
You can reach me at ${data.email} with any questions you may have.

`;
}

module.exports = generateMarkdown;
