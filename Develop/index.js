// TODO: Include packages needed for this application

const { default: inquirer } = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title for your project?",
        validate: (input) => {
            return input ? true : 'Please enter a title for your project';
    },

    },
    { 
        type: "input",
        name: "githubUsername",
        message: "What is your GitHub Username?",
        validate: (input) => {
            return input ? true : 'Please enter your GitHub Username.';
         },
    },
    { 
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: (input) => {
            return input ? true : 'Please enter your email address.';
         },
    },{ 
        type: "input",
        name: "description",
        message: "Describe your application",
        validate: (input) => {
            return input ? true : 'Please enter a description of your project.';
         },
    },{ 
        type: "input",
        name: "explination",
        message: "Why did you create this project?",
        validate: (input) => {
            return input ? true : 'Please enter your GitHub Username.';
         },
    },{ 
        type: "input",
        name: "framework",
        message: "What framwork did you use?",
        validate: (input) => {
            return input ? true : 'Please enter the framework.';
         },
    },{ 
        type: "input",
        name: "license",
        message: "Please choose a license",
        choices: ['Apache', 'IBM', 'MIT', 'ISC','Mozilla', 'None']
        validate: (input) => {
            return input ? true : 'Please choose license';
         },
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    FileSystem.writeFile(fileName, data, (err)) => {
        if (err) throw err;
        console.log('The file is not saved');
    };
}

// TODO: Create a function to initialize app
function init() {}
    return inquirer.prompt(questions)
    .then( (answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('generated-README.md', markdown);
        console.log ("README.md file has been created!")
    })
    .catch((error) => {
        console.log(error)
    })

// Function call to initialize app
init();
