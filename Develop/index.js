// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")

// TODO: Create an array of questions for user input
// const questions = [];

function generateReadme(title, description, table_of_contents, installation, usage, license, contributing, tests, questions){
    `# <${title}>
    ## Description
        ${description}
    ## Table of Contents
        ${table_of_contents}
    ## Installation
        ${installation}
    ## Usage
        ${usage}
    ## Liscense
        ${license}
    ## Contributing
        ${contributing}
    ## Tests
        ${tests}
    ## Questions
        ${questions}`
}

// function Question(title, description, table_of_contents, installation, usage, license, contributing, tests, questions) {
//     this.title = title;
//     this.description = description;
//     this.table_of_contents = table_of_contents;
//     this.installation = installation;
//     this.usage = usage;
//     this.license = license;
//     this.contributing = contributing;
//     this.tests = tests;
//     this.questions = questions;
//     console.log("Question is working!!!")
// }

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Provide a description of your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'List key contents to create a table of contents',
            name: 'table_of_contents',
        },
        {
            type: 'input',
            message: 'Please provide installation instructions if applicable.',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please provide information on how to use the application.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What type of license will you be using for this application?',
            name: 'license',
        },
        {
            type: 'input',
            message: 'How would you like other developers to contribute?',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'What are some test for your application and how do you run them?',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Please provide your Github username.',
            name: 'questions',
        },
    ])
    .then((info) => {
        const readmeContent = generateReadme(info)
        fs.writeFile("README.md", readmeContent, (err) =>
            err ? console.log(err): console.log("Successfully created your README.md file."))
    })









// TODO: Create a function to write README file


// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
