/**
 * 
 * 
 * @param {String} str 
 */
function fearNotLetter(str) {
  let alphabet = [...
    'abcdefghijklmnopqrstuvwxyz'
  ];
  let num = alphabet.indexOf(str.charAt(0));
  for (var i = num; i < num + str.length; i++) {
    if (str.charAt(i - num) !== alphabet[i]) {
      return alphabet[i];
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));
