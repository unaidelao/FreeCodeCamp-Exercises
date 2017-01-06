/*
 * Reverse the provided string.
 * You may need to turn the string into an array before you can reverse it.
 * Your result must be a string.
 */

function reverseString(str) {
  // primero parte el string, luego le da la vuelta y finalmente lo une
  return str.split("").reverse().join("");
}

reverseString("hello");
