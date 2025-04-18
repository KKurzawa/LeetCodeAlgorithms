// Write a function that returns the smallest distance between two factors of a number. The input will always be a number greater than one.

// Example:

// 13013 has factors: [ 1, 7, 11, 13, 77, 91, 143, 169, 1001, 1183, 1859, 13013]

// Hence the answer will be 2 (=13-11)

function minDistance(n) {
    const factors = []
    let min = n
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factors.push(i)
        }
    }
    factors.map((num, i) => {
        if (factors[i + 1] - factors[i] < min) {
            min = factors[i + 1] - factors[i]
        }
    })
    return min
}