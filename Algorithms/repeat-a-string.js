/*
 * Repeat a given string (first argument) "num" times (second argument).
 * Return an empty string if "num" is not a positive number.
 *
 * Help: Global String Object.
 */

 function repeatStringNumTimes(str, num) {

   var newString;

   if (num < 0) {
     return "";
   }
   else if (num === 1) {
     return str;
   }
   else {
     return str + repeatStringNumTimes(str, num - 1); // recursive call
   }
 }

 repeatStringNumTimes("*", 3);
