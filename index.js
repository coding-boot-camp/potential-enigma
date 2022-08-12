const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./Develop/utils/generateMarkdown");

const promptQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your repository? (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your repository title!");
          return false;
        }
      },
    }, 
    {
      type: "list",
      name: "license",
      message: "Which license will you be using for your repo? (Required)",
      choices: ["No License", "MIT"]
    },
     {
       type: "input",
      name: "description",
       message: "What is the description of your repository? (Required)",
       validate: (descriptionInput) => {
         if (descriptionInput) {
           return true;
         } else {
          console.log("Please enter description of the repository!");
          return false;
         }
       },
     },
     {
       type: "confirm",
       name: "confirmInstallation",
       message: "Is there an installation procedure?",
       default: true,
     },
     {
      type: "input",
       name: "installation",
       message: "Please provide list of installation instructions:",
       when: ({ confirmInstallation }) => confirmInstallation,
     },
     {
       type: "confirm",
       name: "confirmUsage",
      message: "would you like you give instructions for you application?",
       default: true,
     },
     {
       type: "input",
       name: "instructions",
       message: "Please provide application instructions:",
       when: ({ confirmUsage }) => confirmUsage,
     },
  ]);
};



function init() {
  promptQuestions()
  .then((inquirerRepsonse) => {
    console.log(inquirerRepsonse)
    fs.writeFile('ReadMe.md', generateMarkdown(inquirerRepsonse), err => {
      if (err) {
        console.error(err);
      }
      // file written successfully
    });
    console.log("Your READme has successfully created!");
  })
  .catch((err) => {
    console.log(err);
  })
}

// Function call to initialize app
init();

