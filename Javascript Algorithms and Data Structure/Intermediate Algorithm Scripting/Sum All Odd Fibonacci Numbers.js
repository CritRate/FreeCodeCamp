function sumFibs(num) {
  let fib = [1, 1];
  let fibSum = 0;
  let count = 2;
  while (fib[count - 1] <= num) {
    fib[count] = fib[count - 2] + fib[count - 1];
    count++;
  }
  for (let i = 0; i < fib.length - 1; i++) {
    if (fib[i] % 2 !== 0) {
      fibSum += fib[i];
    }
  }
  return fibSum;
}

sumFibs(4);
