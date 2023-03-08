const inquirer = require("inquirer");
const { text } = require("stream/consumers");
const shapes = require("./lib/shapes.js");

const getUserChoices = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "Enter up to three characters for your logo",
      name: "text",
    },
    {
      type: "input",
      message: "What color do you want your text to be?",
      name: "textColor",
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
      name: "shapeColor",
    },
  ]);
  // .then((response) => console.log(response));
};

// const generateSvg = ({ text, textColor, shape, shapeColor }) => {
//   return `${text},${textColor},${shape},${shapeColor}`;
// };
const init = () => {
  getUserChoices().then((answers) => {
    console.log(answers);
    const generateLogo = new shapes(answers);
    generateLogo;
  });
};
init();
