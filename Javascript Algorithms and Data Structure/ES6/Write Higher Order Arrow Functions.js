const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
// change code below this line
var squaredIntegers = realNumberArray.filter((val) => {
  if (val % 1 === 0) {
    return val * val;
  }
});
// change code above this line
// test your code
console.log(squaredIntegers);
