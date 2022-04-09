
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const promtQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
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
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username? (Required)',
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
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instuctions for the project (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter your installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter your usage instructions or examples!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmContribution',
            message: 'Would you like to add a Contribution section?',
            default: false
        },
        {
            type:'input',
            name:'contribute',
            message: 'Provied instructions on how other users can contribute',
            when: ({ confirmContribution }) => confirmContribution
        },
        {
            type: 'confirm',
            name: 'confirmTests',
            message: 'Would you like to add a Tests section?',
            default: false
        },
        {
            type:'input',
            name:'tests',
            message: 'Provied examples on how to run tests for your application',
            when: ({ confirmTests }) => confirmTests
        },
        {
            type:'list',
            name: 'licence',
            message: 'What tyjpe of open source licence would you like?',
            choices: ['MIT Licence', 'GNU GPLv3 Licence']
        }
    ])
};

promtQuestions()
    .then(questionData => {

        const readmePage = generateMarkdown(questionData)
        fs.writeFile('./README.md', readmePage, err => {
            if (err) {
                console.log(err);
                return;
            }

            console.log('README has been successfully created!');
        })
    })