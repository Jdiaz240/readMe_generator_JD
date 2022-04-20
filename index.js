// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'projectName',
    },
    {
        type: 'input',
        message: 'Who completed this project?',
        name: 'personName',
    },
    {
        type: 'input',
        message: 'What technologies did you use in this project?',
        name: 'tech',
    },
    {
        type: 'input',
        message: 'what is your github repository link?',
        name: 'repo',
    },
    {
        type: 'input',
        message: 'what is your github live link?',
        name: 'repo',
    },
    {
        type: 'input',
        message: 'What is the link/file path for your image?',
        name: 'projectPic',
    },

  ])
  .then((data) => {
    let md = `# 
    ${data.projectName}
    
    
    Completed by ${data.personName}
    
    
    # Project Description:
    
    
    Produced a Password Generator using Javascript, HTML, and CSS (HTML and CSS provided). Using functions, defined with If statements and linked to one another to produce a series of prompts that the user can confirm or cancel in order for the program to provide the desired password style.
    ${data.tech}
    
    # Project Location:
    [Github Live Link](${data.repo})

    # Project Image:
    [Project Image](${data.projectPic})`
    
    fs.writeFile('readMe.md', (md), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

