/* Return true if the given string is a palindrome. Otherwise, return false.
 * A palindrome is a word or sentence that's spelled the same way both forward
 * and backward, ignoring punctuation, case, and spacing.
 *
 * Note: you'll need to remove all non-alphanumeric characters (punctuation,
 * spaces and symbols) and turn everything lower case in order to check for
 * palindromes.
 *
 * We'll pass strings with varying formats, such as "racecar", "RaceCar", and
 * "race CAR" among others.
 *
 * We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2",
 * and "2_A3*3#A2".
 *
 * Help: String.prototype.replace() , String.prototype.toLowerCase() .
 */

 function palindrome(str) {
  
  var regEx = /[^A-Za-z0-9]/g;
  var pal1 = str.replace(regEx, "").toLowerCase();
  var pal2 = str.replace(regEx, "").toLowerCase().split("").reverse().join("");
  return pal1 === pal2;
}

palindrome("race car");
