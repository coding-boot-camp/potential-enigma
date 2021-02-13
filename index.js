// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [];
  return inquirer.prompt([
  // pass in questions here
  {
    type: 'input',
    message: 'What is the name of your Project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please enter a description of your Project.', 
    name: 'description',
  },
  {
    type: 'input',
    message: 'What is the table of contents for this Project?', 
    name: 'table of contents',
  },
  {
    type: 'input',
    message: 'How can a developer install this application for use?', 
    name: 'installation',
  },
  {
    type: 'input',
    message: 'What is the proper usage of this Project?', 
    name: 'usage',
  },
  {
    type: 'input',
    message: 'What is the licensing of this Project?', 
    name: 'license',
  },
  {
    type: 'input',
    message: 'Please enter any contributors to this Project.', 
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'What tests has this Project run?', 
    name: 'tests',
  },
  {
    type: 'input',
    message: 'Additional questions for this Project?', 
    name: 'questions',
  },
])
.then(answers => {
  // use user feedback for README
})
.catch(error => {
  if(error.isTtyError) {
    // prompt couldn't be rendered in the current environment
  } else {
    // somthing else went wrong
  }
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
