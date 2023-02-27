const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the project title?",
      name: "title",
    },
    {
      type: "input",
      message: "Write a brief project description:",
      name: "description",
    },
    {
      type: "input",
      message: "How do you install your app?",
      name: "installation",
    },
    {
      type: "input",
      message: "What are the usage instructions?",
      name: "usage",
    },
    {
      type: "input",
      message: "What are the contribution guidelines?",
      name: "contributing",
    },
    {
      type: "input",
      message: "What are the testing instructions?",
      name: "testing",
    },
    {
      type: "list",
      message: "What license did you use?",
      name: "license",
      choices: [
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License',
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero GEneral Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ])
  .then(
    ({
      title,
      description,
      installation,
      usage,
      contributing,
      testing,
      license,
      username,
      email,
    }) => {
      const readmeTemplate = `# ${title}

![license](https://img.shields.io/badge/license-MIT%20License-brightgreen)

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Testing](#testing)
* [License](#license)
* [Questions](#questions)

## Description

${description}

## Installation

${installation}

## Usage

${usage}

## Contributing

${contributing}

## Testing

${testing}

## License

This application is covered under this license: ${license}.

## Questions

My GitHub username is ${username} and you can access my GitHub profile here: https://github.com/${username}. My email address is ${email}, at which you can reach me with any questions.`;

      createNewReadme(title, readmeTemplate);
    }
  );

function createNewReadme(filename, data) {
  fs.writeFile(
    `./${filename.toLowerCase().split(" ").join("")}.md`,
    data,
    (err) => {
      if (err) {
        console.log(err);
      }
      console.log("You sucessfully generated a README file!");
    }
  );
}
