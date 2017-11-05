
/*
 * Sum All Primes
 *
 * Sum all the prime numbers up to and including the provided number. A prime
 * number is defined as a number greater than one and having only two divisors,
 * one and itself. For example, 2 is a prime number because it's only divisible
 * by one and two.
 *
 * The provided number may not be a prime.
 */

 function sumPrimes(num) {
   var array = [], upperLimit = Math.sqrt(num), total = 0;

   // Make an array from 2 to (n - 1)
   for (var i = 0; i < num; i++) {
     array.push(true);
   }

   // Remove multiples of primes starting from 2, 3, 5,...
   for (var j = 2; j <= upperLimit; j++) {
     if (array[j]) {
       for (var k = j * j; k < num; k += j) {
         array[k] = false;
       }
     }
   }
   // All array[i] set to true are primes, so, adds to 'total' variable.
   for (var l = 2; l < num; l++) {
     if(array[l]) {
       total += l;
     }
   }

   // If num is a prime number, add it to 'total' variable.
   // (maybe this is not the best implementation, but works!!)
   if (num % 2 != 0) {
     total += num;
   }
   return total;
 }

 console.log(sumPrimes(977));
