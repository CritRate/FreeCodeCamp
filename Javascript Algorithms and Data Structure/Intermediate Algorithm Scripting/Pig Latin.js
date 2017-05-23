/**
 * 
 * 
 * @param {String} str 
 * @returns 
 */
function translatePigLatin(str) {
  let newStr;
  let consonant = str.match(/[aeiou]/);
  if (consonant === null) {
    return str + 'ay';
  }
  if (consonant !== null && consonant.index !== 0) {
    newStr = str.slice(consonant.index) + str.slice(0, consonant.index) + 'ay';
  } else {
    newStr = str + "way";
  }

  return newStr;
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin('ptr'));
