/*
 * Convert HTML entities.
 *
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a
 * string to their corresponding HTML entities.
 */

 function convertHTML(str) {
  return str.replace(/&|<|>|"|'/g, function(x) {
    if (x == "&")
      return "&amp;";
    if (x == "<")
      return "&lt;";
    if (x == ">")
      return "&gt;";
    if (x == '"')
      return "&quot;";
    if (x == "'")
      return "&apos;";
  });
}

console.log(convertHTML("Dolce & Gabbana"));
