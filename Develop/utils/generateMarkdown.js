// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  #Table of Contents
  *[Title](#title)
  *[Description](#description)
  *[Objective](#objective)
  *[Input](#input)
  *[Test](#test)
  *[Usage](#usage)
  *[Installation(#installation)
  *[Contributors](#contributors)
  *License(#license)
  *Questions(#questions)
  ##Description
  $(data.description)
  ##Objective
  $(data.objective)
  ##Test
  $(data.test)
  ##Usage
  $(data.usage)
  ##Installation
  $(data.installation)
  ##Contributors
  $(data.contributors)
  ##Input
  $(data.input)
  ##Questions
  *If you have any questions or would like to contribute to the code please contact me via [GitHub profile](https://github.com/${data.github})                                                                                                                                                                                                                        
  
  * Or email me with any quesitons [send an email](mailto:${data.email}). 
  ## License
  Copyright (c) [${data.github}](https://github.com/${data.github}).
  
${data.license} license.
`;
}
`;
}

module.exports = generateMarkdown;
