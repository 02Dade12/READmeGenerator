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
    message: 'Please name the Project conributors',
},
{
    type: 'list',
    name: 'license',
    message: 'What would you like to use?',
    choices: [
        {
            name: "MIT",
            value: "[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)",
        },
        {
            name: "Personal",
            value: "[![Generic badge](https://img.shields.io/badge/Personal-Active-blue.svg)](https://shields.io/)",
        },
        {
            name: "None",
            value: "None",
        }
    ]
},
{
    type: 'input',
    name: 'tests',
    message: 'How did you test your project?',
},
{
    type: 'input',
    name: 'githubUsername',
    message: 'What is your Github username?',
},
{
    type: 'input',
    name: 'githubLink',
    message: 'What is your Github Link?',
},
{
    type: 'input',
    name: 'githubEmail',
    message: 'What is your email?',
}];

inquirer
    .prompt(questions)
    .then(data => {
        let readme =
`# ${data.title}
# Table of Contents
* [Description](https://github.com/02Dade12/READmeGenerator#description)
* [Installation](https://github.com/02Dade12/READmeGenerator#installation)
* [Usage](https://github.com/02Dade12/READmeGenerator#usage)
* [License](https://github.com/02Dade12/READmeGenerator#license)
* [Contributing](https://github.com/02Dade12/READmeGenerator#contributing)
* [Tests](https://github.com/02Dade12/READmeGenerator#tests)
* [Questions](https://github.com/02Dade12/READmeGenerator#questions)
# Description 
${data.description}
# Installation
${data.installation}
# Usage
${data.usage}
# License
${data.license}
# Contributing
This code was writtin by ${data.contributing}
# Tests
${data.tests}
# Questions
If you have any questions, please try reaching me through one of the following sources:
* ${data.githubUsername}
* [Github Link](${data.githubLink})
* ${data.githubEmail}`

fs.writeFileSync("README.md", readme);

});
