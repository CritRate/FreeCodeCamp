function addTogether() {
  let arg0 = arguments[0];
  if (typeof arg0 !== 'number') {
    return undefined;
  }
  if (arguments[1] === undefined) {
    return function sumTwoAnd() {
      if (typeof arguments[0] !== 'number') {
        return undefined;
      }
      return arg0 + arguments[0];
    };
  }
  if (typeof arguments[1] !== 'number') {
    return undefined;
  }
  return arg0 + arguments[1];
}

console.log(addTogether(2, 3));
console.log(addTogether(2)(3));
