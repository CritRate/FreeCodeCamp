/**
 * 
 * 
 * @param {String} str 
 * @returns 
 */
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str.split(/[^a-zA-Z]/).map((val) => val.charAt(0).toUpperCase() + val.slice(1)).join('').split(/(?=[A-Z])/).join('-').toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("AllThe-small Things"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
