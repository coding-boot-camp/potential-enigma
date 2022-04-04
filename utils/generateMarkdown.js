// TODO: Create a function that returns a license badge & link based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  // add license info as in TODO above
  let licenseLink = '';
  // using switch/case/break as found on MDN statements-switch https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch  
  switch(data.license) {
    case 'MIT': licenseLink = 'https://opensource.org/licenses/MIT';
    break;

    case 'GPL': licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    break;

    case 'OSL': licenseLink = 'https://opensource.org/licenses/OSL-3.0';
    break;

    default: licenseLink = '';
  }

// here's the rest of the markdown 
  return `
[![Generic badge](https://img.shields.io/badge/license-${data.license}-<COLOR>.svg)](#license)
# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#email #github)

## Installation
${data.installation}

## Usage
${data.usage}

## License
### Licensed under [${data.license}](${licenseLink}).

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
* GitHub: [${data.github}](https://github.com/${data.github})
* Email: [${data.email}](mailto:${data.email})
`
}

module.exports = generateMarkdown;
