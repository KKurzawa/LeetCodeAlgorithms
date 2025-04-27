// For "x", determine how many positive integers less than or equal to "x" are odd but not prime. Assume "x" is an integer between 1 and 10000.

// Example: 5 has three odd numbers (1,3,5) and only the number 1 is not prime, so the answer is 1

// Example: 10 has five odd numbers (1,3,5,7,9) and only 1 and 9 are not prime, so the answer is 2

function oddNotPrime(n) {
    let count = 1
    const odds = []
    for (let i = 2; i <= n; i++) {
        if (i % 2 !== 0) {
            odds.push(i)
        }
    }
    odds.map((num) => {
        for (let i = 3; i < num - 1; i++) {
            if (num % i === 0) {
                count++
                break
            }
        }
    })
    return count
}