// 36. Valid Sudoku
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.


// Example 1:


// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.


// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

var isValidSudoku = function (board) {
    let result = true

    for (let i = 0; i < 9; i++) {
        let rows = []
        let columns = []
        const index = 0

        for (let k = index; k < 9; k++) {

            if (board[i][k] !== '.' && rows.includes(board[i][k]) === false) {
                rows.push(board[i][k])
            } else if (rows.includes(board[i][k])) {
                return false
            }

            if (board[k][i] !== '.' && columns.includes(board[k][i]) === false) {
                columns.push(board[k][i])
            } else if (columns.includes(board[k][i])) {
                return false
            }

        }
    }

    const boxOne = [board[0].slice(0, 3), board[1].slice(0, 3), board[2].slice(0, 3)].flat()
    const boxTwo = [board[0].slice(3, 6), board[1].slice(3, 6), board[2].slice(3, 6)].flat()
    const boxThree = [board[0].slice(6, 9), board[1].slice(6, 9), board[2].slice(6, 9)].flat()
    const boxFour = [board[3].slice(0, 3), board[4].slice(0, 3), board[5].slice(0, 3)].flat()
    const boxFive = [board[3].slice(3, 6), board[4].slice(3, 6), board[5].slice(3, 6)].flat()
    const boxSix = [board[3].slice(6, 9), board[4].slice(6, 9), board[5].slice(6, 9)].flat()
    const boxSeven = [board[6].slice(0, 3), board[7].slice(0, 3), board[8].slice(0, 3)].flat()
    const boxEight = [board[6].slice(3, 6), board[7].slice(3, 6), board[8].slice(3, 6)].flat()
    const boxNine = [board[6].slice(6, 9), board[7].slice(6, 9), board[8].slice(6, 9)].flat()

    function boxTest(arr) {
        let storage = []
        for (let i = 0; i < arr.length; i++) {
            if (storage.includes(arr[i]) === false && arr[i] !== '.') {
                storage.push(arr[i])
            } else if (storage.includes(arr[i])) {
                result = false
            }
        }
    }

    boxTest(boxOne)
    boxTest(boxTwo)
    boxTest(boxThree)
    boxTest(boxFour)
    boxTest(boxFive)
    boxTest(boxSix)
    boxTest(boxSeven)
    boxTest(boxEight)
    boxTest(boxNine)

    return result
};