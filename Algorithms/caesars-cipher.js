/* One of the simplest and most widely known ciphers is a Caesar cipher, also known
 * as a shift cipher. In a shift cipher the meanings of the letters are shifted by
 * some set amount.
 *
 * A common modern use is the ROT13 cipher, where the values of the letters are
 * shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
 *
 * Write a function which takes a ROT13 encoded string as input and returns a
 * decoded string.
 *
 * All letters will be uppercase. Do not transform any non-alphabetic character
 * (i.e. spaces, punctuation), but do pass them on.
 *
 * Help: String.prototype.charCodeAt() , String.fromCharCode()
 */

function rot13(str) { // LBH QVQ VG!
  // convert str into a character array
  var charArray = [];
  charArray = str.split("");

  // iterate over chars and manipulate if necessary
  for (var i = 0; i < charArray.length; i++) {
    if (charArray[i].charCodeAt(0) < 65 || charArray[i].charCodeAt(0) > 95) {
      charArray[i] = charArray[i];
    }
    else if (charArray[i].charCodeAt(0) < 78) {
      charArray[i] = String.fromCharCode(charArray[i].charCodeAt(0) + 13);
    }
    else {
      charArray[i] = String.fromCharCode(charArray[i].charCodeAt(0) - 13);
    }
  }
  return charArray.join("");
}

// Change the inputs below to test
rot13("SERR CVMMN");
