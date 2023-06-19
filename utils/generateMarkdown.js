// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {return `https://img.shields.io/badge/liscense-${license}-blue`}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
// return `[License](#https://choosealicense.com/licenses/mit/) ${license}`
if (license) {return `[License](#https://choosealicense.com/licenses/${license}/)`
}else if (None) {return ""}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.Title} 
  ## Description 
  ${data.Description}
  ## Table of Contents
    [Installation](#Installation)
    [Usage](#Usage)
    [License] (#license)
    [Credits] (#Credits)
    [Tests](#Tests)
  [Questions](#Questions)
    
  ## Installation 
  ${data.Installation}
  ## Usage 
  ${data.Usage}
  ## Credits 
  ${data.Credits}
  ## License
   ${data.license}
   -  ${renderLicenseLink(data.license)};
   -  ${renderLicenseBadge(data.license)};
  ## Tests 
  ${data.Tests}
  ## Questions
  ${data.Questions}
`}

module.exports = generateMarkdown;
