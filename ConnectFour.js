// Simulate placing tokens on a Connect Four board.

// Connect Four Example
// INPUT
// A list of integers representing the columns (from 0 to 6) where tokens are dropped, in order. The first player is yellow (Y), followed by red (R), alternating turns.

// OUTPUT
// The final state of the board after all tokens have been placed. Empty cells are marked with -.

// ASSUMPTIONS
// The board has 7 columns and 6 rows (standard Connect Four size).
// Tokens fall to the lowest available position in the chosen column.
// All input values are valid and within the allowed range.
// The input list must not be modified.
// Output format: rows are listed from top to bottom, with the top row first and the bottom row last.
// EXAMPLES
// Example 1:

// Moves = [0,1,2,5,6]

// Result:
// ['-', '-', '-', '-', '-', '-', '-']
// ['-', '-', '-', '-', '-', '-', '-']
// ['-', '-', '-', '-', '-', '-', '-']
// ['-', '-', '-', '-', '-', '-', '-']
// ['-', '-', '-', '-', '-', '-', '-']
// ['Y', 'R', 'Y', '-', '-', 'R', 'Y']
// Example 2:

// Moves = [0,1,2,5,6,2,0,0]

// Result:
// ['-', '-', '-', '-', '-', '-', '-']
// ['-', '-', '-', '-', '-', '-', '-']
// ['-', '-', '-', '-', '-', '-', '-']
// ['R', '-', '-', '-', '-', '-', '-']
// ['Y', '-', 'R', '-', '-', '-', '-']
// ['Y', 'R', 'Y', '-', '-', 'R', 'Y']

function connectFourPlaceTokens(columns) {
    const result = [['-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-']]

    const obj = {
        columnOne: 0,
        columnTwo: 0,
        columnThree: 0,
        columnFour: 0,
        columnFive: 0,
        columnSix: 0,
        columnSeven: 0
    }

    columns.map((num, i) => {
        if (num === 0) {
            i % 2 === 0 ? result[obj.columnOne][num] = 'Y' : result[obj.columnOne][num] = 'R'
            obj.columnOne++
        } else if (num === 1) {
            i % 2 === 0 ? result[obj.columnTwo][num] = 'Y' : result[obj.columnTwo][num] = 'R'
            obj.columnTwo++
        } else if (num === 2) {
            i % 2 === 0 ? result[obj.columnThree][num] = 'Y' : result[obj.columnThree][num] = 'R'
            obj.columnThree++
        } else if (num === 3) {
            i % 2 === 0 ? result[obj.columnFour][num] = 'Y' : result[obj.columnFour][num] = 'R'
            obj.columnFour++
        } else if (num === 4) {
            i % 2 === 0 ? result[obj.columnFive][num] = 'Y' : result[obj.columnFive][num] = 'R'
            obj.columnFive++
        } else if (num === 5) {
            i % 2 === 0 ? result[obj.columnSix][num] = 'Y' : result[obj.columnSix][num] = 'R'
            obj.columnSix++
        } else {
            i % 2 === 0 ? result[obj.columnSeven][num] = 'Y' : result[obj.columnSeven][num] = 'R'
            obj.columnSeven++
        }
    })
    return result.reverse()
}