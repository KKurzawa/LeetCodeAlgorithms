// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function getSum(a, b) {
    const arr = [a, b]
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    let count = 0
    for (let i = min; i <= max; i++) {
        count += i
    }
    return a === b ? a : count
}