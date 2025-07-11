// 168. Excel Sheet Column Title
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...


// Example 1:

// Input: columnNumber = 1
// Output: "A"
// Example 2:

// Input: columnNumber = 28
// Output: "AB"
// Example 3:

// Input: columnNumber = 701
// Output: "ZY"


// Constraints:

// 1 <= columnNumber <= 231 - 1

var convertToTitle = function (columnNumber) {
    let result = []
    let num = columnNumber

    while (num > 0) {
        let remainder = num % 26

        if (remainder === 0) {
            remainder = 26;
        }

        let char = String.fromCharCode(65 + remainder - 1)

        result.unshift(char)
        num = (num - remainder) / 26;
    }

    return result.join('')
};