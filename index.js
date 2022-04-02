// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatePage = require('');
const { writeFile, copyFile } = require('');

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter a project title!');
          return false;
        }
      }  
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project. (Required)',
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
      type:'checkbox',
      name: 'table-of-contents',
      message: 'What sections would you like to include in the Table of Contents?',
      choices: ['Title of Project', 'Description', 'Table of Contents', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'] 
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide installation instructions. (Required)',
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log('You need to enter installation instructions!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How can this project be used?',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('You must enter usage info!');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'licenses',
      message: 'Select which license(s) you would like to use.',
      choices: ['MIT', 'GPLv2.0', 'GPLv3.0', 'OSLv3.0']
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please add contributors to project. (Required)',
      validate: contributingInput => {
        if (contributingInput) {
          return true;
        } else {
          console.log('You must enter contributors!');
          return false;
        }
      }  
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please enter tests used. (Required)',
      validate: testsInput => {
        if (testsInput) {
          return true;
        } else {
          console.log('You must enter tests used!');
          return false;
        }
      }    
    },
    {
      type:'input',
      name: 'contact',
      message: 'Please enter email and github project link (Required)',
      validate: contactInput => {
        if (contactInput) {
          return true;
        } else {
          console.log('You must enter your email and github project link!');
          return false;
        }
      }    
    }
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
