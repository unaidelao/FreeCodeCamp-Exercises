/*
 * Sum All Odd Fibonacci Numbers
 *
 * Given a positive integer num, return the sum of all odd Fibonacci numbers
 * that are less than or equal to num. The first two numbers in the Fibonacci
 * sequence are 1 and 1. Every additional number in the sequence is the sum of
 * the two previous numbers. The first six numbers of the Fibonacci sequence
 * are 1, 1, 2, 3, 5 and 8.
 *
 * For example, sumFibs(10) should return 10 because all odd Fibonacci numbers
 * less than 10 are 1, 1, 3, and 5.
 */

/* This is a modified algorithm for fibonacci math function, but only
 * returns the sum of all odd numbers of the serie.
 */
function sumFibs(num) {
  var a = 1, b = 0, result = 0;

  while (num >= a) {
    if (a % 2 !== 0) {
      result += a;
    }
    var temp = a + b;
    b = a;
    a = temp;
  }

  return result;
}

console.log(sumFibs(4));
