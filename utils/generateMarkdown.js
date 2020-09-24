const generateSection = sectionArr => {

}

const generateOptSections = data => {
  let dataArr = [];
  if (data.confirmEmail) {
    dataArr = Object.entries(data).slice(5, Object.entries(data).length);
  } else {
    dataArr = Object.entries(data).slice(4, Object.entries(data).length);
  }
  console.log(dataArr);
  let sections = ``;

  // for 

  return `
  `;
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
