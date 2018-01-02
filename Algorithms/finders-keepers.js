/*
 * Finders Keepers Algorithm
 *
 * Create a function that looks through an array (first argument) and returns 
 * the first element in the array that passes a truth test (second argument).
 */
 
 function findElement(arr, func) {
   filteredArray = arr.filter(func);
   return filteredArray[0];
 }