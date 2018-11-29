const strings = require('./strings-module.js');

const sum = (num1, num2) => {
  return num1 + num2;
};
const mult = (num1,num2) => {
  return num1*num2;
};
const div = (num1, num2) => {
  return num1 / num2;
};
const square = (num1) => {
  return num1 * 2;
}

module.exports = {
  sum: sum,
  mult: mult,
  div: div,
  square: square
};
