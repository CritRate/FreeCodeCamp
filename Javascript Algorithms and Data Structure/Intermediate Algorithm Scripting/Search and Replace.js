/**
 * 
 * 
 * @param {String} str 
 * @param {String} before 
 * @param {String} after 
 * @returns 
 */
function myReplace(str, before, after) {
  let array = str.split(/\W+/);
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i] === before) {
      if (array[i].charAt(0).match(/[A-Z]/) !== null) {
        after = after.slice(0, 1).toUpperCase() + after.slice(1);
        array[i] = after;
      }
      array[i] = after;
    }
  }
  return array.join(' ');
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")));
