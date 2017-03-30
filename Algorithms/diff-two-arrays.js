/*
 * Compare two arrays and return a new array with any items only found in one
 * of the given arrays, but not both. In other words, return the symmetric
 * difference of the two arrays.
 *
 * Help: Comparison Operators, Array.prototype.slice(), Array.prototype.filter()
 * Array.prototype.indexOf(), Array.prototype.concat()
 */

function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  return newArr.filter(function(i){
    return newArr.indexOf(i) == newArr.lastIndexOf(i);
  });
}
