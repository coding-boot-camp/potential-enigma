// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description opf the project'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Provide installation instructions'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage instructions'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Provide contribution guidelines'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide testing intructions'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address'
        }
    ])
}

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {

}

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
    .then((data) => {
        console.log("Generating README...");
        writeToFile();
    })
    .catch (err => console.log(err));
};

// Function call to initialize app
init();
