const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Include packages needed for this application - inquirer, done




// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What is the name of your project?",
  },
  {
    type: 'input',
    name: 'description',
    message: "What is the description of your project?",
  },
  // {
  //   type: 'input',
  //   name: 'install',
  //   message: "What are the installation guidelines of your project?",
  // },
  // {
  //   type: 'input',
  //   name: 'usage',
  //   message: "How will users use your project?",
  // },
  // {
  //   type: 'input',
  //   name: 'license',
  //   message: "What license are you using?",
  //   choices: ["Apache License 2.0", "GNU General Public License (GPL)", "MIT license"],
  // },
  // {
  //   type: 'input',
  //   name: 'contributors',
  //   message: "Who contributed to your project?",
  // },
  // {
  //   type: 'input',
  //   name: 'test',
  //   message: "What are the test instructions for your project?",
  // },
  // {
  //   type: 'input',
  //   name: 'github',
  //   message: "What is your GitHub username?",
  // },
  // {
  //   type: 'input',
  //   name: 'email',
  //   message: "What is your email?",
  // },
  // {
  //   type: 'input',
  //   name: 'contact',
  //   message: "How should people contact you with questions?",
  // },
];


// fileName = "README.md";
// data = questions[0].val();


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    err ? console.error(err) : console.log('Success! Your README file has been created')
  })

}


// TODO: Create a function to initialize app
function init() {
  writeToFile();
}

// Function call to initialize app
// init();


// how you get user input


inquirer.prompt(questions).then(answers => {
  console.log(`Project Title: ${answers.title}`);
  console.log(`Project Title: ${answers.description}`);
});
