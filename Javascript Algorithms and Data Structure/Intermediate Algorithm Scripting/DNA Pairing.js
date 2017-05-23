/**
 * 
 * 
 * @param {String} str 
 */
function pairElement(str) {
  return str.split('').map((item) => {
    switch (item) {
      case 'G':
        return ['G', 'C'];
      case 'C':
        return ['C', 'G'];
      case 'A':
        return ['A', 'T'];
      case 'T':
        return ['T', 'A'];
      default:
        console.error('Invalid letter. Only ATCG are allowed.');
    }
  });
}

console.log(pairElement("GCG"));
console.log(pairElement("TTGAG"));
