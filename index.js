// required modules
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

// link to where the README is actually created
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [{

    // github username
    type: 'input',
    name: 'username',
    message: 'Username on GitHub:',
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
    message: 'Describe your project:',
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
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: ['MIT', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla', 'Apache', 'Boost', 'Unlicense', 'None'],
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
    validate: nameInput => {
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

    // contribution instructions
{
    type: 'input',
    name: 'contributionInfo',
    message: 'Others can contribute by',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Contributing instructions required!');
        }
    }
},

    //  testing instructions
{
    type: 'input',
    name: 'testing',
    message: 'Others can use testing by',
    validate: (nameInput) => {
        if (nameInput) {
            return true;
        } else {
            console.log('Testing instructions required!');
        }
    }
},

    // for questions
{
    type: 'input',
    name: 'anyQuestions',
    message: 'Others can reach you by:',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            return false;
        }
    }
}
];

// Function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(__dirname, fileName), data)
    
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
        const data = generateMarkdown(answers)
        writeToFile('README.md', data);
    })
}

// Function call to initialize app
init();
