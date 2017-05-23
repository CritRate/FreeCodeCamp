/**
 * 
 * 
 * @param {String} str 
 * @returns 
 */
function convertHTML(str) {
  // &colon;&rpar;
  return str.split('').map((item) => {
    switch (item) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case '\'':
        return '&​apos;';
      default:
        return item;
    }
  }).join('');
}

console.log(convertHTML("Dolce & Gabbana"));
