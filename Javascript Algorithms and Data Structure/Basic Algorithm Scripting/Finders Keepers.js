/**
 * 
 * 
 * @param {Array<Number>} arr returns the first element in the array that passes a truth test
 * @param {Number} func 
 * @returns 
 */
function findElement(arr, func) {
  var num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      num = arr[i];
      break;
    }
    num = undefined;
  }
  return num;
}

findElement([1, 2, 3, 4], function(num) { return num % 2 === 0; });
