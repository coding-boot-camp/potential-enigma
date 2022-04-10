// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const portfolioData = {};
 

// TODO: Create an array of questions for user input

if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  inquirer 
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
      type: 'input', 
      name: 'installation instructions',
      message: 'Provide instructions for user to intall your project (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('You need to enter installation instructions!');
          return false;
        }
      }
    },
    {
    type: 'input',
    name: 'usage information',
    message: 'Provide an explanation for the projects use (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('You need to enter installation instructions!');
        return false;
      }
    }
  },
  {
  type: 'input',
  name: 'Contributors',
  message: 'Please name all contributing developers(Required)',
  validate: descriptionInput => {
    if (descriptionInput) {
      return true;
    } else {
      console.log('You need to enter the project contributors names!');
      return false;
    }
  }
},
      {
        type: 'input',
        name: 'licenses',
        message: 'Please add any and all licenses for this project (Check all that apply)',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('You need to enter the names of any applicable licenses!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
      }
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
 // };

// what is prompt user supposed to do
// define functions below, prompts, init
// read docs for fs and require
// check write to file process 

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
// TODO: Create a function to write README file
 
function writeToFile(fileName, data) {}

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./readme.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

// TODO: Create a function to initialize app
function init() {
  promptReadme
  then((promptReadme) => {generatePage(readme) })
  .catch((error) => {})
}

// Function call to initialize app
init();


 