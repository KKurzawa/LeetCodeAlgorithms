// Find the sum of all multiples of n below m

function sumMul(n, m) {
    let result = 0
    if (n < 1 || m < 1) {
        return "INVALID"
    }
    for (let i = n; i < m; i = i + n) {
        result = result + i
    }
    return result
}