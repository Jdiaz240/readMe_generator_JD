const questions = ['What is the name of your project?','Who completed this project?','Describe your project.',
    'Describe the isntallation process.','Usage information?','Contribution guidelines?',
    'Test Instuctions','what is your github repository link?',
    'what is your github live link?','What is the link/file path for your image?'];

const generateMarkdown = require('./generateMarkdown')
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = ({ projectName,personName,des,install,usage,cont,test,repo,live,projectPic,license}) =>
`# ${projectName}


Completed by ${personName}

# Table of Contents: 

1. [Project Description](#project-description)

2. [Installation](#installation)

3. [Usage Information](#usage-information)

4. [Contribution Guidelines](#contribution-guidelines)

5. [Test Instructions](#test-instructions)

6. [Project Location](#project-location)

7. [License](#license)

8. [Project Image](#project-image)


# Project Description:
${des}


# Installation:
${install}

# Usage information:
${usage}

# Contribution Guidelines:
${cont}

# Test Instructions:
${test}

# Project Location:
[Github Repo Link](${repo})
[Github Live Link](${live})


${generateMarkdown.renderLicenseBadge(license)}

# Project Image:
[Project Image](${projectPic})`

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
        name: 'repo',
    },
    {
        type: 'input',
        message: questions[8],
        name: 'live',
    },
    {
        type: 'input',
        message: questions[9],
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
    const readMeContent = generateReadMe(data)
    fs.writeFile ('readme.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

