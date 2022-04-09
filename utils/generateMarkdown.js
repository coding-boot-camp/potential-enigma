module.exports = templateData => {
  // add contribution section if is exsists
  let contData = ''
  let contTitle = ''
  if (templateData.contribute) {
    contTitle = '## Contribute'
    contData = templateData.contribute
  }

  // add tests section of it exsists
  let testData = ''
  let testTitle = ''
  if (templateData.tests) {
    testTitle = '## Tests'
    testData = templateData.tests
  }

  // add the chosen licence
  let licenceData = ''
  let badgeData = ''
  if (templateData.licence === 'MIT Licence') {
    badgeData = '![badmath](https://img.shields.io/badge/licence-MIT-brightgreen)'
    licenceData = 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so.'
  } else if (templateData.licence === "GNU GPLv3 Licence") {
    badgeData = '![badmath](https://img.shields.io/badge/licence-GNU%20GPLv3-brightgreen)'
    licenceData = 'Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.'
  }

  // return the markup to be added to the read me
  return `
  # ${templateData.title}

  ## Description

  ${templateData.description}

  ${badgeData}

  ## Table of Contents

  - [Licence](#licence)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Questions](#questions)

  ## Installation

  ${templateData.installation}

  ## Usage

  ${templateData.usage}

  ${contTitle}

  ${contData}

  ${testTitle}

  ${testData}

  ## Questions

  For any questions contact me on my github at: [${templateData.github}](https://github.com/${templateData.github})
  
  or email me at: [${templateData.email}](mailto:${templateData.email})

  ## Licence

  ${licenceData}
  `;
};