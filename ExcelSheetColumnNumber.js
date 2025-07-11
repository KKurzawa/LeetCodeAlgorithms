// 171. Excel Sheet Column Number
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

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

// Input: columnTitle = "A"
// Output: 1
// Example 2:

// Input: columnTitle = "AB"
// Output: 28
// Example 3:

// Input: columnTitle = "ZY"
// Output: 701


// Constraints:

// 1 <= columnTitle.length <= 7
// columnTitle consists only of uppercase English letters.
// columnTitle is in the range ["A", "FXSHRXW"].

var titleToNumber = function (columnTitle) {
    const individualCodes = []
    let result = 0

    for (let i = 0; i < columnTitle.length; i++) {
        individualCodes.unshift(columnTitle.charCodeAt(i) - 64)
    }

    individualCodes.map((num, i) => {
        result += num * 26 ** i
    })

    return result
};