// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let yourLicense = ''
  const licenseBadges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensourse.org/licenses/MIT)',
    'ISC': '[![License: ISC](https://img.shields.io/badge/License-ISC-green.svg)](https://opensourse.org/licenses/ISC)',
    'IBM': '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-red.svg)](https://opensourse.org/licenses/IPL-1.0)'
  }
  if (license === 'MIT') {
    yourLicense = licenseBadges[license]
  } else if (license === 'ISC') {
    yourLicense = licenseBadges[license]
  } else if (license === 'IBM') {
    yourLicense = licenseBadges[license]
  } else if (license === '') {
    yourLicense = ''
  }
  return yourLicense;

};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const yourLink = ' '
  const licenseLink = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'ISC': '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    'IBM': '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  }
  if (licenseLink === 'MIT') {
    yourLink = '[![License: MIT](https://opensource.org/licenses/MIT)]'
  } else if (licenseLink === 'ISC') {
    yourLink = '[![License: ISC](https://opensource.org/licenses/ISC)]'
  } else if (licenseLink === 'IBM') {
    yourLink = '[![License: IPL 1.0](https://opensource.org/licenses/IPL-1.0)]'
  } else if (licenseLink === ' ') {
    yourLink = ' '
  }
  return yourLink;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  # ${title}

   ## ${licenseBadge}
  
   ## Description
     ${description}
  
   ## Table of Contents
     1. ${toc1}
     2. ${toc2}
     3. ${toc3}
     4. ${toc4}
     5. ${toc5}
     6. ${toc6}
    7. ${toc7}
    8. ${toc8}
    9. ${toc9}

  
   ## Instillation
       ${instillation}
  
  ## Usage
       ${usage}
  
   ## License
      ${license}
  
  ## Contributtion
      ${contribution}
  
   ## Tests
      ${tests}
     ## Questions
      ${questions}
      ${email}

`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
