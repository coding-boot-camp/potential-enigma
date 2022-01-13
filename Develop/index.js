// required modules
const fs = require('fs');
const inquirer = require('inquirer');
const { type } = require('os');

// link to where the README is actually created
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [{

    // github username
    type: 'input',
    name: 'username',
    message: 'Ussername on GitHub:',
    validate: nameInput => {
        if (nameInput) {
            return true;
        }
        else {
            console.log('Your username is required!');
            return false;
        }
    }
},

    // github repository name
{
    type: 'input',
    name: 'title',
    message: 'Name of your GitHub repository:',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Your repository name is required!');
            return false;
        }
    }
},

    // email address
{
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Email address is required!');
            return false;
        }
    }
},

    // description of project
{
    type: 'input',
    name: 'description',
    message: 'Describe your project:'
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else { 
            console.log('A description of your project is required!');
            return false;
        }
    }
},

    // license choosing
{
    type: 'checkbox',
    name: 'license',
    message: 'Choose a license:',
    choices: ['MIT', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla', 'Apache', 'MIT', 'Boost', 'Unlicense'],
    validate: nameInput => {
        if (nameInput) {
             return true;
        } else {
            console.log('Choosing a license is required!');
            return false;
        }
    }
},

  //  installation instructions
{
    type: 'input',
    name: 'install',
    message: 'Installation instructions for your project:',
    validate: nameInput {
        if (nameInput) {
            return true;
        } else {
            console.log('Installation instructions required!');
            return false;
        }
    }
},

    // usage instructions
{
    type: 'input',
    name: 'usage',
    message: 'Usage instructions:',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Usage instructions required!');
            return false;
        }
    }   
},

    // contribution confirmation
{
    type: 'confirm',
    name 'confirmContributors',
    message: 'Do you allow others to contribute to this repository?'
},

    // contribution instructions
{
    type: 'input',
    name: 'contributionInfo'
    message: 'Others can contribute by',
    when: ({confirmContributors}) => {
        if (confirmContributors) {
            return true;
        } else {
            return false;
        }
    }
},

    // testing confirmation
{
    type: 'confirm',
    name: 'confirmTesting'
    message: 'Can others use testing??'
},

    //  testing instructions
{
    type: 'input',
    name: 'testing',
    message: 'Others can use testing by',
    when: ({confirmTesting}) => {
        if (confirmTesting) {
            return true;
        } else {
            return false;
        }
    }
},
];

// Function to write README file
function writeToFile(fileName, data) {
fs.writeFile('README.md', data, error => {
    // handle errors
    if (error) {throw error};
    else {console.log('README created!')}
    })
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        if (answers) {
            console.log('Successful initialization!')
        } else {
            console.log('Something went wrong :(')
        }
        const data = generateMarkdown.generateMarkdown(answers)
        writeToFile(data);
    })
}

// Function call to initialize app
init();
