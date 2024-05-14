const palindromes = function (str) {
  str = removePunctuationAndSpace(str);
  str = str.toLowerCase();
  return str === str.split("").reverse().join("");
};

const removePunctuationAndSpace = function (str) {
  const punctuationAndSpace = /[\.,?!\s]/g;
  return str.replace(punctuationAndSpace, "");
};

// Do not edit below this line
module.exports = palindromes;
