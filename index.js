// import required libraries
const inquirer = require('inquirer');
const fs = require('fs');


// defining inquirer questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter a title name for your project (required)'
    },
    {
        type: 'input',
        name: 'what',
        message: 'What does your project do? (required)'
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
        name: 'tech',
        message: 'What technologies does your project use? (required)'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe the steps required to install your project (required)',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please outline the steps to use your project (required)',
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Please provide a path to a screenshot of your project',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list any users or sources you want to credit to aiding you through your project (required)'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please list any contribution guidelines for future users (required)'
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
        message: 'Please enter a link to your github',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email'
    },
    {
        type: 'input',
        name: 'contact',
        message: 'Please enter instructions for users on how to be able to contact you (required, if no contact is wanted state so)'
    },
];

// set of checks for if user would like to skip answers
const imageCheck = function(answers) {
    if (answers.screenshot === '') {
        return `\`\`\`md
${answers.usage}
\`\`\``
    }

    return (`![project screenshot](${answers.screenshot})

\`\`\`md
${answers.usage}
\`\`\``)    
};

const whyCheck = function(answers) {
    if (answers.why === '') {
        return ``
    }

    return(`### Reasons for Development

${answers.why}`)
};

const howCheck = function(answers) {
    if (answers.how === '') {
        return ``
    }

    return(`### Successes and Failures

${answers.how}`)
};

const contributionCheck = function(answers) {
    if (answers.contribution === '') {
        return ``
    }

    return (`## Contribution

Guidelines for contribution:

${answers.contribution}`)
};

const creditsCheck = function(answers) {
    if (answers.credits === '') {
        return ``
    }

    return (`## Credits

${answers.credits}`)
};

const emailCheck = function(answers) {
    if (answers.email === '') {
        return ``
    }

    return `${answers.email}`
};

const gitCheck = function(answers) {
    if (answers.github === '') {
        return ``
    }

    return `${answers.github}`
};

// function that determines Readme format
const writeReadMe = (answers) => 
`# ${answers.title} ![${answers.license}](https://img.shields.io/badge/License-${answers.license.replaceAll(' ', '%20')}-brightgreen)

## Description

### What does ${answers.title} do?

${answers.what}

${whyCheck(answers)}

${howCheck(answers)}

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

${imageCheck(answers)}

${creditsCheck(answers)}

${contributionCheck(answers)}

## Questions

${answers.contact}

${gitCheck(answers)}
${emailCheck(answers)}

---
## Licence
This project is covered under the \`${answers.license}\``

// inquirer function as per documenation
inquirer.prompt(questions).then((answers) => {
   fs.writeFile('README.md', writeReadMe(answers), (err) =>
   err ? console.error(err) : console.log('it worked!')
   );
});