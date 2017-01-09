/* Return the length of the longest word in the provided sentence.
 *
 * Your response should be a number.
 *
 * Help: String.prototype.split() , String.length .
 */

 function findLongestWord(str) {
   var arrayWord = [];
   arrayWord = str.split(" ");

   var totalLength = 0;
   
   for (var i = 0; i <= arrayWord.length -1; i++) {
     if (arrayWord[i].length > totalLength) {
       totalLength = arrayWord[i].length;
     }
   }
   return totalLength;
 }

 findLongestWord("Google do a barrel roll");
