/**
 * 
 * 
 * @param {String} str 
 * @returns 
 */
function palindrome(str) {
  // Good luck!
  return [...str.toLowerCase().replace(/[^a-z0-9]/g, '')].join('') === [...str.toLowerCase().replace(/[^a-z0-9]/g, '')].reverse().join('');
}



console.log(palindrome("_eye"));
console.log(palindrome("race car"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("1 eye for of 1 eye."));
