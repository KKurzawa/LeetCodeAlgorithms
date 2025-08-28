// 1351. Count Negative Numbers in a Sorted Matrix
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.



// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
// Example 2:

// Input: grid = [[3,2],[1,0]]
// Output: 0


// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 100
// -100 <= grid[i][j] <= 100


// Follow up: Could you find an O(n + m) solution?

var countNegatives = function (grid) {
    let result = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] < 0) {
                result += grid[i].length - j
                break
            }
        }
    }

    return result
};

var countNegatives = function (grid) {
    const flatGrid = grid.flat().sort((a, b) => b - a)
    let result = 0

    for (let i = 0; i < flatGrid.length; i++) {
        if (flatGrid[i] < 0) {
            result += flatGrid.length - i
            break
        }
    }

    return result
};