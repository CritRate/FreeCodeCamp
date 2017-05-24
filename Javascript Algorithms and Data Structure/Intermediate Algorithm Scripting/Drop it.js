/**
 * 
 * 
 * @param {Array<Number>} arr 
 * @param {Function} func 
 * @returns 
 */
function dropElements(arr, func) {
  // Drop them elements.

  while (arr.length > 0) {
    if (!func(arr[0])) {
      arr.shift();
    } else {
      return arr;
    }
  }
  return arr;
}

console.log(dropElements([1, 2, 3], function(n) { return n < 3; }));
console.log(dropElements([1, 2, 3, 4], function(n) { return n >= 3; }));
console.log(dropElements([1, 2, 3, 9, 2], function(n) { return n > 2; }));
console.log(dropElements([1, 2, 3], function(n) { return n > 0; }));
console.log(dropElements([1, 2, 3, 4], function(n) { return n > 5; }));
