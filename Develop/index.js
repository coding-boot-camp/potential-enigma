// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const generatePage = require('./src/potential-enigma');
// const { writeFile } = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = ['Please enter name of project', 'Please type in description', 'How do you install this project?', 'How do you use application?', 'What contributions did you use?', 'How do you run the test?', 'What are frequently add questions?'];
    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
function promptUser() {
    
        return inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter your name!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your GitHub username!');
                return false;
              }
            }
          },
          {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
          },
          {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({ confirmAbout }) => confirmAbout
          }
        ]);
    
}
function promptProject () {

    return inquirer.prompt([
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
    }
    ])
}
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

promptUser()
    .then(promptProject);
