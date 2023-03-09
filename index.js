const logoGen = require("./lib/logoGen");

// const generateSvg = ({ text, textColor, shape, shapeColor }) => {
//   return `${text},${textColor},${shape},${shapeColor}`;
// };
const init = () => {
  console.log("test");
  const newLogo = new logoGen();
  newLogo.run();
};
init();
