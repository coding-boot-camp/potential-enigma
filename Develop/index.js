// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
console.log(document);
// TODO: Create an array of questions for user input
inquirer.prompt = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please include information about your project.'
    },
    {
        type: 'input',
        name: 'installation',
        messsage: 'Please explain the steps to your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your application?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'enter applicable license',
        choices: ['MIT', 'The GPL', 'Apache License', 'GNU License']
    },
    {
        type: 'input',
        name: 'Github username',
        message: 'Please contact me! I can be reached at this link.'
    }
];


// TODO: Create a function to write README file
function writeToFile() {
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
