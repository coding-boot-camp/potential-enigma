const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the Project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your github username!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmEmail',
        message: 'would you like to enter an email?',
        default: true
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
        when: ({ confirmEmail }) => confirmEmail
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe the project! (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installInstructions',
        message: 'How do you install the application?'
    },
    {
        type: 'list',
        name: 'usageInfo',
        message: 'Select the usage license for the product.',
        choices: ['Public Domain', 'Permissive', 'Copyleft (Protective)', 'Noncommercial', 'Proprietary', 'Trade secret']
    },
    {
        type: 'input',
        name: 'contGuide',
        message: 'Describe how people can contribute.'
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'How should people test the product?'
    }
];

const mockData = {
    title: 'game-finder',
    github: 'sithSlave',
    confirmEmail: true,
    email: 'talk2joshbgosh@gmail.com',
    description: 'an app to help users determine what game to buy. It also shows you where you can buy the game, and displays reviews.',
    installInstructions: 'https://sithslave.github.io/game-finder/',
    usageInfo: 'Public Domain',
    contGuide: 'Clone the repository, push to the develop branch of my github page with the new developments. Your code will be reviewed. If it is up to standard, it will be merged to master.',
    testInstructions: 'You may test this on your local machine since it is a web app, and can be tested through your browser.'
  }

const promptUser = () => {
    // inquirer.prompt(questions)
    // .then(data => {
    //     console.log(data);
    //     
    writeToFile(mockData);
    // })
}

// function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', generateMarkdown(data), err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    })
    
}

// function to initialize program
function init() {
    promptUser();
}

// function call to initialize program
init();
