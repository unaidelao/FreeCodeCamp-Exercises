/*
* Convert the given number into a roman numeral.
*
* All roman numerals answers should be given in upper-case.
*
* Help: Array.prototype.splice()
*       Array.prototype.indexOf()
*       Array.prototype.join()
*/

function convertToRoman(num) {
 // Create two arrays, whose index positions correspond to the same number
 var intArrayValues   = [ 1000,  900, 500,  400, 100,   90,  50,   40,  10,    9,   5,    4,  1  ];
 var romanArrayValues = [  'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

 var result = '';

 // Compare num with the nearest value in intArrayValues
 for (var index = 0; index < intArrayValues.length; index++) {
   while (intArrayValues[index] <= num) {
     // so if num is 73, puts L into result and substract 50 to num
     // then, repeats the proccess with 23, and so on
     result += romanArrayValues[index];
     num    -= intArrayValues[index];
   }
 }
 return result;

}
convertToRoman(36);
