const generateSection = sectionArr => {
  // switch (sectionArr[0]) {
  //   case 
  // }
  let sectionMd = ``;
}

const generateOptSections = data => {
  let dataArr = [];
  if (data.confirmEmail) {
    dataArr = Object.entries(data).slice(5, Object.entries(data).length);
  } else {
    dataArr = Object.entries(data).slice(4, Object.entries(data).length);
  }
  let sections = ``;

  console.log(dataArr);
  for (let i = 0; i < dataArr.length; i++) {
    console.log(dataArr[i][0]);
    if (dataArr[i][1]) {
      sections += generateSection(dataArr[i]);
    }
  } 

  return sections;
}

// function to generate markdown for README
function generateMarkdown(data) {
  let title = data.title.toUpperCase();
  return `# ${title}

## Description

  ${data.description}${generateOptSections(data)}

## Questions

`;
};

module.exports = generateMarkdown;
