let falsy = val => {
  if (val === false || val === "" || val === undefined || val === null) {
    return false;
  }
  if (typeof val === "number") {

    if (val === 0 || isNaN(val)) {

      return false;
    }
  }
  return true;
};
/**
 * 
 * 
 * @param {Array<Object>} collection 
 * @param {String} pre 
 * @returns 
 */
function truthCheck(collection, pre) {
  // Is everyone being true?
  for (let i = 0; i < collection.length; i++) {
    if (!falsy(collection[i][pre])) {
      return false;
    }
  }
  return true;
}

console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"));
