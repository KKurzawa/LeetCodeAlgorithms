// 6. Zigzag Conversion
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);


// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"


// Constraints:

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000

var convert = function (s, numRows) {
    if (numRows === 1) {
        return s
    }

    const arr = []
    let count = 0

    for (let i = 0; i < numRows; i++) {
        arr.push([])
    }

    let operation = 'add'

    for (let i = 0; i < s.length; i++) {
        arr[count].push(s[i])

        operation === 'add' ? count++ : count--

        if (count === numRows - 1) {
            operation = 'subtract'
        } else if (count === 0) {
            operation = 'add'
        }
    }

    return arr.flat().join('')
};