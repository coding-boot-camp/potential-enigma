// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please include information about your project.',

    },
    {
        type: 'input',
        name: 'installation',
        messsage: 'Please explain the steps to your project?',

    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your application?',

    },
    {
        type: 'list',
        name: 'license',
        message: 'enter applicable license',
        choices: ['MIT', 'The GPL', 'Mozilla Public License', 'Boost Software License']
    },
    {
        type: 'input',
        name: 'git',
        message: 'Please contact me! I can be reached at this link.',


    },
    {
        type: 'input',
        name: 'Email',
        message: 'Email'
    }
]


// TODO: Create a function to write README file
function writeFile(fileName, data) {
    fs.writeFile(fileName,data,function(err){
        if(err) {
            console.log("error");
        }
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers)
        var readMe = generateMarkdown(answers)
        console.log("generate succcess!", readMe);
        writeFile("readMe.md", readMe)
    });
    
}

// Function call to initialize app
init();
