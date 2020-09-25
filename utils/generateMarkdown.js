const generateSection = sectionArr => {
  let sectionDetails = sectionArr[1];
  let title = '';
  switch (sectionArr[0]) {
    case 'installInstructions':
      title = 'Installation';
      break;
    case 'usageInfo':
      title = 'Usage';
      break;
    case 'contGuide':
      title = 'Contributing';
      break;
    case 'testInstructions':
      title = 'Tests';
      break;
    case 'licenseInfo':
      title = 'License'
      break;
  }

  return `

## ${title}

${sectionDetails}`;
}

const generateOptSections = data => {
  let dataArr = [];
  if (data.confirmEmail) {
    dataArr = Object.entries(data).slice(5, Object.entries(data).length);
  } else {
    dataArr = Object.entries(data).slice(4, Object.entries(data).length);
  }
  let sections = ``;

  for (let i = 0; i < dataArr.length; i++) {
    if (dataArr[i][1]) {
      sections += generateSection(dataArr[i]);
    }
  }

  return sections;
}

const createBadge = licenseInfo => {
  let tempLicense = licenseInfo.split(' ').join("%20");
  let color;
  switch (licenseInfo) {
    case 'Public Domain':
      color = 'green';
      break;
    case 'Permissive':
      color = 'blue';
      break;
    case 'Copyleft':
      color = 'yellow';
      break;
    case 'Noncommercial':
      color = 'orange';
      break;
    case 'Proprietary':
      color = 'red';
      break;
    case 'Trade secret':
      color = 'blueviolet';
      break;
  }
  let badgeEndpoint = `https://img.shields.io/badge/license-${tempLicense}-${color}`;

  return `![](${badgeEndpoint})`;
}

const displayEmail = data => {
  if (data.confirmEmail) {
    return `


[${data.email}](mailto:${data.email})`;
  } else {
    return ``;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  let title = data.title.toUpperCase();
  return `# ${title}          ${createBadge(data.licenseInfo)}

## Description

  ${data.description}${generateOptSections(data)}

## Questions

[You can see more projects I have created here](https://github.com/${data.github}/) ${displayEmail(data)}

`;
};

module.exports = generateMarkdown;
