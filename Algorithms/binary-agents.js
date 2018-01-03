/*
 * Binary Agents Algorithm
 *
 * Return an English translated sentence of the passed binary string.
 * The binary string will be space separated.
 */
 
 function binaryAgent(str) {
  strArray = str.split(' ');
  translatedCharArray = [];
  translatedStr = "";
  
  /* Parse binary codes into chars, and push them into
   * translatedArray[].
   */
  for (var i = 0; i < strArray.length; i++) {
    translatedCharArray.push(String.fromCharCode(parseInt(strArray[i], 2)));
  }
  
  translatedStr = translatedCharArray.join('');
  return translatedStr;
}