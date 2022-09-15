// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { writeFile } = require('./utils/helpers.js');
// Install Prompt
function promptInstall () {

    return inquirer.prompt([
    {
        type: 'input',
        name: 'install',
        message: 'Please enter installation instructions? (Required)',
        validate: installInput => {
        if (installInput) {
            return true;
        } else {
            console.log('You need to enter installation instructions!');
            return false;
        }
        }    
    }])
}
 // Usage Prompt 
function promptUsage () {

    return inquirer.prompt([
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use application? (Required)',
        validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('You need to enter usage!');
            return false;
        }
        }
    }
    ])
}
// Contribution Prompt
function promptContribution () {

    return inquirer.prompt([
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines? (Required)',
        validate: contributionInput => {
        if (contributionInput) {
            return true;
        } else {
            console.log('You need to enter contribution guidelines!');
            return false;
        }
        }    
    }])
}
// Test Prompt 
function promptTest () {

    return inquirer.prompt([
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions? (Required)',
        validate: testInput => {
        if (testInput) {
            return true;
        } else {
            console.log('You need to enter test instructions!');
            return false;
        }
        }
    }
    ])
}
// Questions Prompt
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
            type: 'input',
            name: 'email',
            message: 'What is your email? (Required)',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter your email!');
                return false;
              }
            }
          },
        ]);
    
}
// Project info Prompt
function promptProject () {

    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: titleInput => {
        if (titleInput) {
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

var inputData = {};
// Prompt each question one by one
promptUser()
    .then(input => {
    inputData.name = input.name;
    inputData.github = input.github;
    inputData.email = input.email;
    })
    .then (promptInstall)
    .then (input => {
    inputData.install = input.install;
    }) 
    .then(promptProject)
    .then (input => {
    inputData.title = input.title;
    inputData.description = input.description;
    })
    .then(promptUsage)
    .then (input => {
    inputData.usage = input.usage;
    })
    .then(promptContribution)
    .then (input => {
    inputData.contribution = input.contribution;
    })
    .then(promptTest)
    .then (input => {
    inputData.test = input.test;
    })
    .then(pageHTML => {
        return writeFile(generateMarkdown(inputData));
    })
