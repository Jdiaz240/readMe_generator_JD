// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = ['What is the name of your project?','Who completed this project?','Describe your project.',
    'Describe the isntallation process.','Usage information?','Contribution guidelines?',
    'Test Instuctions','what is your github repository link?',
    'what is your github live link?','What is the link/file path for your image?'];
    
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();


const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([
    {
        type: 'input',
        message: questions[0],
        name: 'projectName',
    },
    {
        type: 'input',
        message: questions[1],
        name: 'personName',
    },
    {
        type: 'input',
        message: questions[2],
        name: 'des',
    },
    {
        type: 'input',
        message: questions[3],
        name: 'install',
    },
    {
        type: 'input',
        message: questions[4],
        name: 'usage',
    },
    {
        type: 'input',
        message: questions[5],
        name: 'cont',
    },
    {
        type: 'input',
        message: questions[6],
        name: 'test',
    },
    {
        type: 'input',
        message: questions[7],
        name: 'des',
    },
    {
        type: 'input',
        message: questions[8],
        name: 'repo',
    },
    {
        type: 'input',
        message: questions[9],
        name: 'live',
    },
    {
        type: 'input',
        message: questions[10],
        name: 'projectPic',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },

  ])
  .then((data) => {
    let md = `# ${data.projectName}


Completed by ${data.personName}


# Project Description:
${data.des}


# Installation Installation:
${data.install}

# Usage information:
${data.usage}

# Contribution Guidlines:
${data.cont}

# Test Instructions:
${data.test}

# Project Location:
[Github Repo Link](${data.repo})
[Github Live Link](${data.live})

![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)

# Project Image:
[Project Image](${data.projectPic})`
    
    fs.writeFile('readMe.md', (md), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

