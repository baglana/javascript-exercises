const sumAll = function(num1, num2) {
  if (num1 < 0 || num2 < 0
    || typeof num1 !== 'number'
    || typeof num2 !== 'number') {
    return 'ERROR';
  }
  const from = Math.min(num1, num2);
  const to = Math.max(num1, num2);
  let sum = 0;
  for (let i = from; i <= to; i++) {
    sum += i;
  }
  return sum;
};

// console.log(sumAll(1, 4)); // returns the sum of 1 + 2 + 3 + 4 which is 10

// Do not edit below this line
module.exports = sumAll;
