// 231. Power of Two
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.



// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: n = 3
// Output: false


// Constraints:

// -231 <= n <= 231 - 1


// Follow up: Could you solve it without loops/recursion?


var isPowerOfTwo = function (n) {
    if (n === 1) {
        return true
    }

    let num = 2

    while (num < n) {
        num *= 2
    }


    return num === n ? true : false
};