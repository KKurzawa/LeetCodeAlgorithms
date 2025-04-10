// In this Kata, you will be given two numbers, a and b, and your task is to determine if the first number a is divisible by all the prime factors of the second number b. For example: solve(15,12) = False because 15 is not divisible by all the prime factors of 12 (which include2).

// See test cases for more examples.

// Good luck!

function solve(a, b) {
    const factors = []
    let result = true
    for (let i = 2; i <= b; i++) {
        if (b % i === 0) {
            factors.push(i)
        }
    }

    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }

    const primes = factors.filter(isPrime)

    primes.map((e) => {
        if (a % e !== 0) {
            result = false
        }
    })

    return result
};