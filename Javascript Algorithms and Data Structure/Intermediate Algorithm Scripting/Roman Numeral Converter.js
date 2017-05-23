function convertToRoman(num) {

  ROMAN = {
    'I': 1,
    'II': 2,
    'III': 3,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000
  }
  let roman = "";
  let keys = Object.keys(ROMAN);

  while (num > 0) {
    for (let i = keys.length; i >= 0; i--) {
      if (ROMAN[keys[i]] <= num) {
        num -= ROMAN[keys[i]];
        roman += keys[i];
        break;
      }
    }
  }

  return roman;
}

console.log(convertToRoman(36));
console.log(convertToRoman(3999));
