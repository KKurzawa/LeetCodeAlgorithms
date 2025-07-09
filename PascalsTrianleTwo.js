// 119. Pascal's Triangle II
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:




// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]


// Constraints:

// 0 <= rowIndex <= 33

var getRow = function (rowIndex) {
    if (rowIndex === 0) {
        return [1]
    } else if (rowIndex === 1) {
        return [1, 1]
    }

    const result = [[1], [1, 1]]

    for (let i = 2; i < rowIndex + 1; i++) {
        let storage = [1]
        let targetArr = result[i - 1]

        for (let j = 0; j < targetArr.length - 1; j++) {
            let pointer = j + 1
            storage.push(targetArr[j] + targetArr[pointer])
        }

        storage.push(1)
        result.push(storage)
    }

    return result[rowIndex]
};