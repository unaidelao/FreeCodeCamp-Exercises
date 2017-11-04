/*
 * Spinal Tap Case
 *
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-
 * by-dashes.
 */

 function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace and return all spaces and underscores with required dashes.

  return str.toLowerCase().replace(/\s|_+/g, "-");
}

console.log(spinalCase('thisIsSpinalTap'));
