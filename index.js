const inquirer = require("inquirer");

inquirer
  .createPromptModule([
    {
      type: "input",
      message: "Enter up to three characters for your logo",
      name: "text",
    },
    {
      type: "input",
      message: "What color do you want your text to be?",
      name: "text-color",
    },
    {
      type: "list",
      message: "What shape do you want to represent your logo",
      name: "shape",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      message: "What color do you want your shape to be?",
      name: "shape-color",
    },
  ])
  .then((response) => console.log(response));
