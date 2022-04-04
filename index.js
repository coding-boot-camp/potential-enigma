// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter a project title!');
          return false;
        }
      }  
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project. (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('You need to enter a project description!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide installation instructions. (Required)',
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log('You need to enter installation instructions!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How can this project be used?',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('You must enter usage info!');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Select which license(s) you would like to use.',
      choices: ['MIT', 'GPL', 'OSL'],
      validate: licenseInput => {
        if (licenseInput) {
          return true;
        } else {
          console.log('You must enter a license!');
          return false;
        } 
      }
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please add contributors to project. (Required)',
      validate: contributingInput => {
        if (contributingInput) {
          return true;
        } else {
          console.log('You must enter contributors!');
          return false;
        }
      }  
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please enter tests used. (Required)',
      validate: testsInput => {
        if (testsInput) {
          return true;
        } else {
          console.log('You must enter tests used!');
          return false;
        }
      }    
    },
    {
      type:'input',
      name: 'email',
      message: 'Please enter your email (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('You must enter your email!');
          return false;
        }
      }    
    },
    {
      type:'input',
      name: 'github',
      message: 'Please enter your GitHub username (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('You must enter your GitHub username!');
          return false;
        }
      }    
    }
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }
    console.log('Success!')
  });
}

const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
const init = () => {
  questions()
    .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
    .then(() => console.log('Generating!'))
    .catch((err) => console.log(err)); 
};

// Function call to initialize app
init();
