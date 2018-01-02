/*
 * Steamroller Algorithm
 *
 * Flatten a nested array. You must account for varying levels of nesting.
 */
 
 function steamrollArray(arr) {
   
    return arr.reduce(function (flat, arr) {
      return flat.concat(Array.isArray(arr) ? steamrollArray(arr) : arr);
  }, []);
 }