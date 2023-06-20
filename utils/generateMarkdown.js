// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![alt text](https://img.shields.io/badge/license-${license}-blue)`
  } return ''
  }
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== 'None') {
      return `[License](https://choosealicense.com/licenses/${license}/)`
    } return ''
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
} return ''
}

// function renderGitHubLink(username) {
//   if (username) {
//   return `[github](https://github.com/${username})`
// } else (console.log(data.username))}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
# ${data.Title} 
## Description 
  ${data.Description}
## Table of Contents
[Installation](#installation) 

[Usage](#usage)

[License](#license)

[Credits](#credits)

[Tests](#tests)

[Questions](#questions)

## Installation 
  ${data.Installation}
## Usage 
  ${data.Usage}
## Credits 
  ${data.Credits}
## License
  ${data.license}
      ${renderLicenseLink(data.license)}
      ${renderLicenseSection(data.license)}
## Tests 
  ${data.Tests}
## Questions
Check out my GitHub at https://github.com/${data.username} 

Contact me at ${data.email} for any further questions.
`}

module.exports = generateMarkdown;
