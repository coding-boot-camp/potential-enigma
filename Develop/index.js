// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your application?",
  },
  {
    type: "input",
    name: "purpose",
    message:
      "What is the intended purpose of the application? What problem is it trying to solve?",
  },
  {
    type: "input",
    name: "install",
    message:
      "How can a user install the applicaiton and make it ready for use?",
  },
  {
    type: "input",
    name: "use",
    message: "How does the user use the application once it is installed?",
  },
  {
    type: "input",
    name: "issues",
    message: "How can the user report errors or problems?",
  },
  {
    type: "input",
    name: "contributions",
    message: "How can the user contribute to the project?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const content = `
  # ${data.title}
  
  ## Description
  ${data.purpose}
  
  ## Installation
  ${data.install}
  
  ## Usage
  ${data.use}
  
  ## Reporting Issues
  ${data.issues}
  
  ## Contributions
  ${data.contributions}
    `;
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`README.md file generated successfully`);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", data);
  });
}
// Function call to initialize app
init();
