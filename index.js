// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();


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
      message: 'what is your github repository link?',
      name: 'repo',
    },
  ])
  .then((data) => {
    let md = `# passowrdGenerator_JD
    ${data.projectName}
    
    
    Completed by ${data.personName}
    
    
    # Project Description:
    
    
    Produced a Password Generator using Javascript, HTML, and CSS (HTML and CSS provided). Using functions, defined with If statements and linked to one another to produce a series of prompts that the user can confirm or cancel in order for the program to provide the desired password style.
    ${data.tech}
    
    # Project Location:
    [Github Live Link](${data.repo})
    
    fs.writeFile('readMe.md', (md), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

//   `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//     <title>Document</title></head><body><div class="jumbotron jumbotron-fluid"><div class="container"><h1 class="display-4">Hi! My name is ${data.personName}</h1>
//     <p class="lead">I am from ${data.location}</p><h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group"><li class="list-group-item">My GitHub username is ${data.github}</li>
//     <li class="list-group-item">LinkedIn: ${data.linkedin}</li></ul></div></div></body></html>`