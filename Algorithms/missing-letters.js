/*
 * Missing Letters
 *
 * Find the missing letter in the passed letter range and return it.
 *
 * If all letters are present in the range, return undefined.
 *
 * Help: String.prototype.charCodeAt()
 *       String.fromCharCode()
 */
 
function fearNotLetter(str) {
  var arrCode = [];
  var missedLetter = '';
  
  for (var i = 0; i < str.length; i++) {
    arrCode[i] = str.charCodeAt(i);
  }
  
  for (var j = 0; j < arrCode.length; j++) {
    if ((arrCode[j] + 1) !== arrCode[j + 1]) {
      missedLetter = String.fromCharCode(arrCode[j] + 1);
      return missedLetter;
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));