/*
 * Return the remaining elements of an array after chopping off n elements
 * from the head.
 *
 * The head means the beginning of the array, or the zeroth index.
 *
 * Help: Array.prototype.slice(), Array.prototype.splice()
 */

function slasher(arr, howMany) {
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);
