/**
 * 
 * 
 * @param {Number} num 
 * @returns 
 */
function sumPrimes(num) {
  let sum = 0;

  for (var i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}


function isPrime(value) {
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
}
console.log(sumPrimes(10));
