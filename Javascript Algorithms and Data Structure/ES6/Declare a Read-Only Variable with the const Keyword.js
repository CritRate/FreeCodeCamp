// change 'var' to 'let' or 'const'
// rename constant variables
const pi = 3.14;
let radius = 10;
let calculateCircumference = function(r) {
  let diameter = 2 * r;
  let result = pi * diameter;
  return result;
};
// Test your code
console.log(calculateCircumference(radius));
