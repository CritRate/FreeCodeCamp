/**
 * 
 * 
 * @param {String} str 
 * @returns 
 */
function binaryAgent(str) {

  /**
   * 
   * 
   * @param {String} val 
   */
  let binaryToNumber = val => {
    let sum = 0;
    val = val.split('').reverse();
    for (let i = 0; i < val.length; i++) {
      sum += val[i] * Math.pow(2, i);
    };
    return sum;
  }
  let result = '';
  str.split(' ').forEach(val => {
    result += String.fromCharCode(binaryToNumber(val));
  });
  console.log(result);
  return result;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
