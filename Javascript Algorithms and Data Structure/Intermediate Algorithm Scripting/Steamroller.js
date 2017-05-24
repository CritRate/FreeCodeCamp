/**
 * 
 * 
 * @param {Array} arr 
 * @returns 
 */
function steamrollArray(arr) {
  // I'm a steamroller, baby
  let steamrolled = [];

  var flatten = val => {
    if (!Array.isArray(val)) {
      steamrolled.push(val);
    } else {
      val.forEach(flatten);
    }
  };

  arr.forEach(flatten);

  return steamrolled;
}

console.log(steamrollArray([1, [2],
  [3, [
    [4]
  ]]
]));
