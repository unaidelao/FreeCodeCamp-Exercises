function smallestCommons(arr) {
  /* Variables needed */
  // Smallest Common Multiple.
  var scm = 0;
  // Index of working array.
  var arrayIndex;
  // Counter of loop iterations.
  var iteration = 1;
  
  // Sort given array.
  arr.sort(function (a, b) {
    return b - a;
  });
  
  // New array with range numbers given. Descending order.
  var newArray = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArray.push(i);
  }
  
  // Calculates the smallest common multiple into the range of numbers.
  do {
    scm = newArray[0] * iteration * newArray[1];
    for (arrayIndex = 2; arrayIndex < newArray.length; arrayIndex++) {
      if (scm % newArray[arrayIndex] !== 0) {
        break;
      }
    }
    iteration++;
  } while (arrayIndex !== newArray.length);
  
  return scm;
}