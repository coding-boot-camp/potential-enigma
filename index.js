
'use strict';
const inquirer = require('inquirer');

console.log('Hi, Welcome to the ReadMe Generator');

const questions = [
    {
        type: 'input',
        name: 'readMeTitle',
        message: 'What is the title of your project?',
        default: 'README Title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of your project:',
        default: 'Project Description goes here',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation Instructions:',
        default: 'Your installation instructions here',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage Information:',
        default: 'Your usage instructions here',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Testing Instructions:',
        default: 'Your testing instructions here',
    },
    {
        type: 'list',
        name: 'license',
        message: 'License Options:',
        choices: ['MIT', 'Apache', 'GPL'],
        filter(val) {
            return val.toLowerCase();
        },
        default: 'MIT',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address for further support:',
        default: 'No Email',
    },
    {
        type: 'confirm',
        name: 'emailSecondary',
        message: 'Are you sure you dont want to include an email?',
        when(answers) {
            return answers.email === 'No Email';
        },
    },
    {
        type: 'input',
        name: 'emailConfirmed',
        message: 'Enter email address for further support:',
        default: 'No Email',
        when(answers) {
            return answers.emailSecondary == false;
        },
    }
];

inquirer.prompt(questions).then((answers) => {
    console.log('\nGenerated README Object:');
    console.log(JSON.stringify(answers, null, '  '));
});
