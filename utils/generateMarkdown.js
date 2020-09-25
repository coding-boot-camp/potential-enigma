//a function to create a section with a title, and details, and return a styled literal template
const generateSection = sectionArr => {
  let sectionDetails = sectionArr[1];
  let title = sectionArr[0];
  return `

## ${title}

${sectionDetails}`;
}

//a function to remove the required sections, that way could iterate through them.
// returns the clipped array
const clipRequired = (data) => {
  let dataArr = [];
  if (data.confirmEmail) {
    dataArr = Object.entries(data).slice(5, Object.entries(data).length);
  } else {
    dataArr = Object.entries(data).slice(4, Object.entries(data).length);
  }
  return dataArr;
}

//a function that uses a clipped array to itterate through each optional section. 
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

// a function to add a license badge to the Title
const createBadge = licenseInfo => {
  let tempLicense = licenseInfo.split(' ').join("%20");
  let color;
  //a switch statement to assign the color to the badge.
  switch (licenseInfo) {
    case 'Public Domain': color = 'green'; break;
    case 'Permissive': color = 'blue'; break;
    case 'Copyleft': color = 'yellow'; break;
    case 'Noncommercial': color = 'orange'; break;
    case 'Proprietary': color = 'red'; break;
    case 'Trade secret': color = 'blueviolet'; break;
  }

  //creates an endpoint for the immage using the color, and the license information.
  let badgeEndpoint = `https://img.shields.io/badge/license-${tempLicense}-${color}`;

  return `![](${badgeEndpoint})`;
}

// a function to display the email if there was one provided
const displayEmail = data => {
  if (data.confirmEmail) {
    return `

[You may email me here ${data.email}](mailto:${data.email})`;
  } else {
    return ``;
  }
}

//a function to display the optional sections table of contents for all the elements that are there.
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

//creates the table of contents if there are enough sections to justify it. if there is one or less non required fields, no table of contents will be generated.
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
// creates all of the required fields, and calls all the nonrequired fields
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

//export
module.exports = generateMarkdown;
