// imports
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
        name: 'Installation',
        message: 'How do you install the application?'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How can people use your app?',
        choices: ['Public Domain', 'Permissive', 'Copyleft (Protective)', 'Noncommercial', 'Proprietary', 'Trade secret']
    },
    {
        type: 'list',
        name: 'License',
        message: 'Select the usage license for the product.',
        choices: ['Public Domain', 'Permissive', 'Copyleft', 'Noncommercial', 'Proprietary', 'Trade secret']
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Describe how people can contribute.'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'How should people test the product?'
    }
];

// a function to prompt the user with questions.
const promptUser = () => {
    inquirer.prompt(questions)
        .then(data => {
            writeToFile(data);
        })
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

// function call to initialize program
promptUser();
