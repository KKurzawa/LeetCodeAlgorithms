// Given a positive integer N, return the largest integer k such that 3^k < N.

// For example,

// 3 --> 0
// 4 --> 1
// You may assume that the input to your function is always a positive integer.

function largestPower(n) {
    if (n === 1) {
        return -1
    } else if (n < 4) {
        return 0
    }


    let total = 0
    let num = 0

    while (total < n) {
        num++
        total = 3 ** num
    }

    return num - 1
}