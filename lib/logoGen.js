const shapeCode = `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">`;

const inquirer = require("inquirer");

class logoGen {
  constructor() {
    this.text;
    this.textColor;
    this.shapeColor;
    this.shape = "";
  }
  run() {
    return inquirer
      .prompt([
        // {
        //   type: "input",
        //   message: "Enter up to three characters for your logo",
        //   name: "text",
        // },
        // {
        //   type: "input",
        //   message: "What color do you want your text to be?",
        //   name: "textColor",
        // },
        // {
        //   type: "input",
        //   message: "What color do you want your shape to be?",
        //   name: "shapeColor",
        // },
        {
          type: "list",
          message: "What shape do you want to represent your logo",
          name: "shapeChoice",
          choices: ["circle", "triangle", "square"],
        },
      ])
      .then(({ shapeChoice }) => {
        console.log(shapeChoice + "shapeChoice");
        shapeDecider(shapeChoice);
      });
  }
}

// function createLogo() {
//   console.log(answers);
// }

function shapeDecider(shapeChoice) {
  function renderCircle() {
    const circle = `<circle cx="25" cy="75" r="20"/>`;
    this.shape = circle;
  }

  function renderTriangle() {
    const triangle = `<polygon points="50 15, 100 100, 0 100/>`;
    this.shape = triangle;
  }

  function renderSquare() {
    const square = ` <rect x="50" y="20" width="150" height="150"/>`;
    this.shape = square;
  }

  if (shapeChoice == "circle") {
    renderCircle();
    console.log(this.shape);
  } else if (shapeChoice == "triangle") {
    renderTriangle();
    console.log(this.shape);
  } else {
    console.log(this.shape);
  }
}

module.exports = logoGen;
