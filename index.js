// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input', 
        name: 'Description',
        message: 'Provide a short description of your project explaining the what, why, and how of your project.'
    },
    {
        type: 'input',
        name: 'Installation', 
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input', 
        name: 'Usage', 
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'input', 
        name: 'Credits', 
        message: 'List any collaborators.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license.',
        choices: ['mit', 'agpl-3.0', 'apache-2.0', 'None'], 
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Write a test for your project.'
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'What questions do you have?'
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'What is your GitHub username?'
    }, 
    {
        type: 'input',
        name: 'Questions',
        message: 'What is your email?'
    }

]

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
        const readmeString = generateMarkdown(answers)
        console.log(readmeString)
        writeToFile(readmeString)
    }
    )}

// Function call to initialize app
init();
