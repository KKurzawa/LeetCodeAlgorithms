// 1556. Thousand Separator
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer n, add a dot (".") as the thousands separator and return it in string format.



// Example 1:

// Input: n = 987
// Output: "987"
// Example 2:

// Input: n = 1234
// Output: "1.234"


// Constraints:

// 0 <= n <= 231 - 1

var thousandSeparator = function (n) {
    const arr = String(n).split('').reverse('')
    const result = []

    for (let i = 0; i < arr.length; i++) {
        if (i % 3 === 0 && i !== 0) result.push('.')
        result.push(arr[i])
    }
    return result.reverse().join('')
};