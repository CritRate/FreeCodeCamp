/**
 * 
 * 
 * @param {[]} arr 
 * @returns 
 */
function destroyer(arr) {
  // Remove all the values
  //console.log(arr.indexOf(arguments[1]));

  for (var i = 1; i <= arguments.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      //      console.log(arr.indexOf(arguments[i]));
      if (arr.indexOf(arguments[i]) !== -1) {
        arr.splice(arr.indexOf(arguments[i]), arr.indexOf(arguments[i]) + 1);
      }
    }
  }
  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
