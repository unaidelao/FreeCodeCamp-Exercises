/*
 * Remove all falsy values from an array.
 * Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 *
 * Help: Boolean Objects, Array.prototype.filter()
 */

 function bouncer(arr) {
   // Don't show a false ID to this bouncer.
   function withoutFalseID(element) {
     return Boolean(element);
   }
   return arr.filter(withoutFalseID);
 }

 bouncer([false, null, 0, NaN, undefined, ""]);
