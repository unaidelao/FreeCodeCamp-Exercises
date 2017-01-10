/*
 * Return the provided string with the first letter of each word capitalized.
 * Make sure the rest of the words is in lower case.
 *
 * Help: String.prototype.split()
 */

function titleCase(str) {
  var arrayStr = [];
  arrayStr = str.toLowerCase().split(" ");

  for (var i = 0; i < arrayStr.length; i++) {
    arrayStr[i] = arrayStr[i].charAt(0).toUpperCase() + arrayStr[i].slice(1);
  }

  return arrayStr.join(" ");
}

titleCase("sHoRt AnD sToUt");
