const shapeCode = `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">`;

const { create } = require("domain");
const inquirer = require("inquirer");

const { writeFile } = require("fs/promises");
const { createDocument } = require("./renderLogo");

class logoGen {
  run() {
    inquirer
      .prompt([
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
          type: "input",
          message: "What color do you want your shape to be?",
          name: "shapeColor",
        },
        {
          type: "list",
          message: "What shape do you want to represent your logo",
          name: "shapeChoice",
          choices: ["circle", "triangle", "square"],
        },
      ])
      .then(({ text, textColor, shapeColor, shapeChoice }) => {
        const logoTemplate = {
          text: text,
          textColor: textColor,
          shapeColor: shapeColor,
          shapeChoice: shapeChoice,
        };
        shapeDecider(logoTemplate);
      });

    function shapeDecider(logoTemplate) {
      function renderCircle() {
        const circle = `<circle cx="150" cy="100" r="80" fill="${logoTemplate.shapeColor}" />`;

        let chosenShape = circle;
        let document = `
          <svg version="1.1"
          width="300" height="200" 
          xmlns="http://www.w3.org/2000/svg">
          ${chosenShape}
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${logoTemplate.textColor}">${logoTemplate.text}</text>
           </svg>`;
        writeFile("Logo.SVG", document);
      }

      function renderTriangle() {
        const triangle = `<polygon points="50 15, 100 100, 0 100" fill="${logoTemplate.shapeColor}"/>`;

        let chosenShape = triangle;
        let document = `
          <svg version="1.1"
          width="300" height="200" 
          xmlns="http://www.w3.org/2000/svg">
          ${chosenShape}
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${logoTemplate.textColor}">${logoTemplate.text}</text>
           </svg>`;
        writeFile("Logo.SVG", document);
      }

      function renderSquare() {
        const square = ` <rect x="50" y="20" width="150" height="150" fill="${logoTemplate.shapeColor}"/>`;

        let chosenShape = square;
        let document = `
          <svg version="1.1"
          width="300" height="200" 
          xmlns="http://www.w3.org/2000/svg">
          ${chosenShape}
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${logoTemplate.textColor}">${logoTemplate.text}</text>
           </svg>`;
        writeFile("Logo.SVG", document);
      }

      if (logoTemplate.shapeChoice == "circle") {
        renderCircle();
      } else if (logoTemplate.shapeChoice == "triangle") {
        renderTriangle();
      } else {
        renderSquare();
      }
    }
  }
}
module.exports = logoGen;
