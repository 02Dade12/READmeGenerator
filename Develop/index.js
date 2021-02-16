// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your Project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Please describe your Project?',
},
{
    type: 'input',
    name: 'installation',
    message: 'What technology did you use?',
},
{
    type: 'input',
    name: 'usage',
    message: 'Please describe the usage:',
},
{
    type: 'input',
    name: 'contributing',
    message: 'What did you contribute to the project?',
},
{
    type: 'list',
    name: 'license',
    message: 'What would you like to use?',
    choices: [
        {
            name: "MIT",
            value: "[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)",
        }
    ]
},
{
    type: 'input',
    name: 'tests',
    message: 'How did you test your project?',
}];

inquirer
    .prompt(questions)
    .then(data => {
        let readme =
        `
        # ${data.title}


        # Description
        ${data.description}

        
        # Installation


        # Usage


        # Contributing


        # License
        ${data.license}

        # Tests

        `
        fs.writeFileSync("README.md", readme);
    });
