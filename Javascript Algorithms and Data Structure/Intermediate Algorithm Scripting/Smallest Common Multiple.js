/**
 * 
 * 
 * @param {Array<Number>} arr 
 * @returns 
 */
function smallestCommons(arr) {

  let common = 0;

  arr.sort((a, b) => a > b);
  let isCommon = false;
  let isCommonAndDivisible = false;
  let count = arr[0];
  let num = 0;
  while (!isCommonAndDivisible) {
    while (!isCommon) {
      num = count * arr[1];
      count++;
      isCommon = true;

    }

    for (let i = arr[0]; i <= arr[1]; i++) {

      if (num % i !== 0) {
        isCommon = false;
        break;
      }
      if (i === arr[1]) {
        isCommonAndDivisible = true;
        common = num;
      }
    }
  }

  return common;
}


console.log(smallestCommons([1, 5]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([23, 18]));
