const generateSection = sectionArr => {
  let sectionDetails = sectionArr[1];
  let title = sectionArr[0];
  return `

## ${title}

${sectionDetails}`;
}

const clipRequired = (data) => {
  let dataArr = [];
  if (data.confirmEmail) {
    dataArr = Object.entries(data).slice(5, Object.entries(data).length);
  } else {
    dataArr = Object.entries(data).slice(4, Object.entries(data).length);
  }
  return dataArr;
}

const generateOptSections = data => {
  sectionsArr = clipRequired(data);
  let sections = ``;

  for (let i = 0; i < sectionsArr.length; i++) {
    if (sectionsArr[i][1]) {
      sections += generateSection(sectionsArr[i]);
    }
  }

  return sections;
}

const createBadge = licenseInfo => {
  let tempLicense = licenseInfo.split(' ').join("%20");
  let color;
  switch (licenseInfo) {
    case 'Public Domain': color = 'green'; break;
    case 'Permissive': color = 'blue'; break;
    case 'Copyleft': color = 'yellow'; break;
    case 'Noncommercial': color = 'orange'; break;
    case 'Proprietary': color = 'red'; break;
    case 'Trade secret': color = 'blueviolet'; break;
  }

  let badgeEndpoint = `https://img.shields.io/badge/license-${tempLicense}-${color}`;

  return `![](${badgeEndpoint})`;
}

const displayEmail = data => {
  if (data.confirmEmail) {
    return `


[You may email me here ${data.email}](mailto:${data.email})`;
  } else {
    return ``;
  }
}

const displayOptCont = (optArr) => {
  let list = optArr.map(opt => {
    if(opt[1]){
    let listItem = `* [${opt[0]}](#${opt[0]})
  `;
    return listItem;
    } else return '';
  }).join('');
  return list;
};

const createTableOfContents = (data) => {
  const optionalSectionArr = clipRequired(data);
  let tableContents;
  if (optionalSectionArr.length > 1) {
    tableContents = `## Contents
      
  * [Description](#description)
  ${displayOptCont(optionalSectionArr)}* [Questions](#questions)`
  }

  return tableContents;
}

// function to generate markdown for README
function generateMarkdown(data) {
  let title = data.title.toUpperCase();
  return `# ${title}          ${createBadge(data.License)}

${createTableOfContents(data)}

## Description

  ${data.description}${generateOptSections(data)}

## Questions

[You can see more projects I have created here](https://github.com/${data.github}/) ${displayEmail(data)}

`;
};

module.exports = generateMarkdown;
