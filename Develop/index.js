// TODO: Include packages needed for this application
const inquire = require("inquirer");
const fs = require("fs");
const util = require("util"); 

const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the name of this project?",
    name: "title",

    type: "input",
    message: "Please decribe your project",
    name: "description",

    type: "input",
    message: "What is the project's purpose?",
    name: "objective",

    type: "input",
    message: "How can users test this project?",
    name: "test",

    type: "input",
    message: "How can this project be used?",
    name: "usage",

    type: "input",
    message: "What dependencies are needed to run this project?",
    name: "installation",
    default: "npm i",

    type: "input",
    message: "Who all who contributed to this project",
    name: "contributors",

    type: "list",
    message: "Select a license for this project",
    choices: [
         'Unlicense', 'Apache', 'GNU General Public License', 'MIT License'
    ],

    type: "input",
    message: "What has this project taught you?",
    name: "learn",

    type: "input",
    message: "What is your Github username?",
    name: "github",

    type: "input",
    message: "What is your email address?",
    name: "email",
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
           return console.log(err);
        } else {
            console.log("Green Light!")
        }
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
