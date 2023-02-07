// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ title, description, tableofcontents, installation, usage, license, contributing, tests, questions }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! The name of the README Repository is ${title}</h1>
    <p class="lead"> ${description}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">The table of contents is ${tableofcontents}</li>
      <li class="list-group-item">The installation process is ${installation}</li>
      <li class="list-group-item">The usage of this application is ${usage}</li>
      <li class="list-group-item">${license}</li>
      <li class="list-group-item"> The contributers are ${contributing}</li>
      <li class="list-group-item">This application can be tested by ${tests}</li>
      <li class="list-group-item">Any extra ${questions}?</li>
    </ul>
  </div>
</div>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your unique title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the description of your README?',
    },
    {
      type: 'input',
      name: 'tableofcontents',
      message: 'Enter your table of contents',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter your installation process.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage of your application.',
      },
      {
        type: 'input',
        name: 'license',
        message: 'What is the license?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Are there any contributers?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What are your tests instructions?',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Instructions on how to reach you with any questions.',
      },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeToFileSync(path.join(process.cwd(), fileName),data);
}

// TODO: Create a function to initialize app
async function init() {
    const responses = await inquirer.prompt(questions);
    const data = markdown({...responses});

    console.log('Creating README...');

    writeToFile('README.md', data);
}

// Function call to initialize app
init();

