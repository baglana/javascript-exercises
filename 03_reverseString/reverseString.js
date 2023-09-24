// const reverseString = function(str) {
//   let reversedStr = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str.charAt(i);
//   }
//   return reversedStr;
// };

const reverseString = function(string) {
  return string
    .split('')
    .reverse()
    .join('');
}

// console.log(reverseString('hello there')); // returns 'ereht olleh'

// Do not edit below this line
module.exports = reverseString;
