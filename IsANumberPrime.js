// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
// Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */


function isPrime(num) {
    const primes = [2, 3, 5, 7]
    if (num < 2 || num === 9) {
        return false
    }
    if (num < 11 && primes.includes(num)) {
        return true
    }
    if (num % 2 === 0) {
        return false
    }
    const sqRt = Math.sqrt(num)
    for (let i = 3; i <= sqRt; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}