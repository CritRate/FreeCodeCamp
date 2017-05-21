/**
 * 
 * 
 * @param {[]} arr1 
 * @param {Array<String>} arr2 
 * @returns 
 */
function diffArray(arr1, arr2) {
  // Same, same; but different.
  return arr1.concat(arr2)
    .filter((val) => {
      return !arr1.includes(val) || !arr2.includes(val);
    });
}


console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
