// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs')

// TODO: Create an array of questions for user input
const prompt = [
        {
        type: 'input',
        name: 'title',
        message: "Please enter your project's title: ",
        validate: githubInput => {
            if(githubInput) {
                return true
            } else {
                console.log('Please enter your Project Name!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: "Please enter your project's description: ",
        validate: githubInput => {
            if(githubInput) {
                return true
            } else {
                console.log('Please enter your Project Description!')
                return false
            }
        }
    },
    {
        type: 'list',
        name: 'typeOf',
        message: "What type of project is this: ",
        choices: ["Website", "Node.js App", "Other"],
    },
    {
        type: 'input',
        name: 'website',
        message: "Enter the link of the website: ",
        when: answers => {
            if (answers.typeOf === "Website") {
                return true
            } else {
                return false
            }
        },
        validate: githubInput => {
            if(githubInput) {
                return true
            } else {
                console.log('Please enter your Project URL!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'installNode',
        message: "Please explain how to install your Node.js application: ",
        when: answers => {
            if (answers.typeOf === "Node.js App") {
                return true
            } else {
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'installOther',
        message: "Please explain how to install your application: ",
        when: answers => {
            if (answers.typeOf === "Other") {
                return true
            } else {
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please provide steps for how the project is to be used: "
    },
    {
        type: 'input',
        name: 'contribute',
        message: "Please explain how you would like users to contribute to your project: "
    },
    {
        type: 'input',
        name: 'tests',
        message: "Please type how users can test their code: "
    },
    {
        type: 'list',
        name: 'license',
        message: "Please choose a license for this project: ",
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT', 'The Unlicense', 'None']
    },
    {
        type: 'input',
        name: 'username',
        message: "Please type your GitHub username: ",
        validate: githubInput => {
            if(githubInput) {
                return true
            } else {
                console.log('Please enter your GitHub Username!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please type your email address: ",
    }
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
        fs.writeFile(fileName, data, (err) => {
        if (err) throw err
        console.log('README Generated Successfully!')
    })
}

const promptInquirer = () => inquirer.prompt(prompt)

// TODO: Create a function to initialize app
const init = () => {
    promptInquirer()
        .then(answers => {
            const markdownFile = generateMarkdown(answers)
            writeToFile("./dist/README.md", markdownFile)
        })
}
// Function call to initialize app
init();
