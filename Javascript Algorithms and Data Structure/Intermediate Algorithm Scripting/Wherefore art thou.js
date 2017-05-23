/**
 * 
 * 
 * @param {Object[]} collection
 * @param {Object} source
 * @returns 
 */
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line 

  return collection.filter((val) => Object.keys(source).every((item) => val.hasOwnProperty(item) && val[item] === source[item]));


  // Only change code above this line
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 }));
