const sumItems = function(array, accumulator = 0) {

  // Sum all the numbers in the array
  for (let item of array) {
    // base case, no nesting
    if (!Array.isArray(item)) {
      accumulator += item;
      console.log(accumulator);
    }
    // recursion case, array is encountered
    if (Array.isArray(item)) {
      console.log('recursive call');
      accumulator = sumItems(item, accumulator);

    }

  }

  return accumulator;
};
console.log(
  "Final Total: ",
  sumItems([2,2,[[[[[[5,2]]]]],2]])
);


module.exports = sumItems;