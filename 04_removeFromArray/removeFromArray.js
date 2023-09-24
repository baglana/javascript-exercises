const removeFromArray = function(arr, ...toRemove) {
  // toRemove = Array.from(arguments).slice(1);
  for (const element of toRemove) {
    let elementIndex = arr.indexOf(element);
    while (elementIndex >= 0) {
      arr.splice(elementIndex, 1);
      elementIndex = arr.indexOf(element);
    }
  }
  return arr;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 4)); // should remove 3 and return [1,2,4]

// Do not edit below this line
module.exports = removeFromArray;
