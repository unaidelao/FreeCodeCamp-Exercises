/*
 * We'll pass you an array of two numbers. Return the sum of those two numbers
 * and all numbers between them.
 *
 * The lowest number will not always come first.
 *
 * Help: Math.max(), Math.min(), Array.prototype.reduce()
 */

function sumAll(arr) {
  // get the minimum value of the given array
  var minArrayValue = Math.min(arr[0], arr[1]);
  //get the maximum value of the given array
  var maxArrayValue = Math.max(arr[0], arr[1]);
  // temporal variable that will get the iterative sum of all the numbers
  var sumResult = 0;

  for (var i = minArrayValue; i <= maxArrayValue; i++) {
    sumResult += i;
  }
  return sumResult;
}

sumAll([5, 10]);
