// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license) {
    return
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license === "none") {
    return "";
  } else {
    return `\n* [License] (#license)\n`
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license === "none") {
    return "";
  } else {
    return `## License
    
    Used under the ${data.license} license.`
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}


  ## Table of Contents

  * [Installation] (#installation)

  * [Usage] (#usage)
  ${renderLicenseLink(data.license)}

  * [Questions] (#questions)


  ## Installation
  To install program, run the following:
  ``${data.installation}``


  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}


  ## Contributions
  ${data.contribution}


  ## Testing
  To test the program, run the following:
  ``${data.test}``


  ## Questions
  To see more of my work, visit:
  [${data.github}](https://github.com/${data.github}/)

  For any questions, email me:
  ${data.email}
  
`;
}

module.exports = generateMarkdown;
