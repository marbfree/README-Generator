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
        message: 'What is the description of your project?'
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
        console.log(answers.Title)
        const readmeString = generateMarkdown(answers)
        console.log(readmeString)
        // writeToFile(readmeString)
    }
    )}

// Function call to initialize app
init();
