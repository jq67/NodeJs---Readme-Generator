const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter a title name for your project'
    },
    {
        type: 'input',
        name: 'what',
        message: 'What does your project do?'
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you decide to create this project'
    },
    {
        type: 'input',
        name: 'how',
        message: 'How does your project accomplish or fail to meet your goal'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe the steps required to install your project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please outline the steps to use your project',
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Please provide a path to a screenshot of your project',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list any users or sources you want to credit to aiding you through your project'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please list any contribution guidelines for future users'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project',
        choices: ['Mozilla Public License 2.0', 'Apache License 2.0', 'Mit License', 'Boost Software License', 'The Unlicense'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email'
    },
    {
        type: 'input',
        name: 'contact',
        message: 'Please enter instructions for users on how to be able to contact you'
    },
];

const writeReadMe = (answers) => 
`# ${answers.title} ![${answers.license}](https://img.shields.io/badge/License-${answers.license.replaceAll(' ', '%20')}-brightgreen)

## Description

### What does ${answers.title} do?

${answers.what}

### Reasons for Development

${answers.why}

### Successes and Failures

${answers.how}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contribution](#contribution)
- [Questions](#questions)
- [Licence](#licence)

---

## Installation 

### Technologies Used in Development

Technologies used include:

${answers.tech}

### Installation Instructions

\`\`\`md
${answers.installation}
\`\`\`

## Usage

\`\`\`md
![${answers.title}](${answers.screenshot})
\`\`\`

${answers.usage}

## Credits

Users and sources that I used to aid the development of ${answers.title} include:

${answers.credits}

## Contribution

Instructions for contribution include:
${answers.contribution}

## Questions

${answers.contact}
${answers.github}
${answers.email}

---
## Licence
This project is covered under the \`${answers.license}\` license.`

inquirer.prompt(questions).then((answers) => {
   fs.writeFile('README.md', writeReadMe(answers), (err) =>
   err ? console.error(err) : console.log('it worked!')
   );
});

