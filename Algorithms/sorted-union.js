/*
 * Sorted Union
 *
 * Write a function that takes two or more arrays and returns a new array of
 * unique values in the order of the original provided arrays. In other words,
 * all values present from all arrays should be included in their original
 * order, but with no duplicates in the final array.
 *
 * The unique numbers should be sorted by their original order, but the final
 * array should not be sorted in numerical order.
 */

function uniteUnique(arr1, arr2, arr3) {
  // The array with the final result
  var resultArray = [];
  // New array with uniteUnique arguments (Seen on Mozzilla Developer website)
  var argsArray = [].slice.call(arguments);

  // Loop through every element of argsArray
  for (var i = 0; i < argsArray.length; i++) {

    for (var j = 0; j < argsArray[i].length; j++) {
      var number = argsArray[i][j];

      // If number is not on the resultArray, pushes it.
      if (resultArray.indexOf(number) < 0) {
        resultArray.push(number);
      }
    }
  }
  return resultArray;
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
