// Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary)

// Matrix = array of n length whose elements are n length arrays of integers.

// 3x3 example:

// [
//   [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ]
// ]

// returns --> 30 // 1 + 5 + 9 + 3 + 5 + 7

function sum(matrix) {
    let result = []

    for (let i = 0; i < matrix.length; i++) {
        result.push(matrix[i][i])
    }

    let index = 0

    for (let i = matrix.length - 1; i >= 0; i--) {
        result.push(matrix[index][i])
        index = index + 1
    }

    return result.reduce((total, num) => {
        return total += num
    }, 0)
}

function sumTwo(matrix) {
    let result = 0

    for (let i = 0; i < matrix.length; i++) {
        result = result + matrix[i][i]
    }

    let index = 0

    for (let i = matrix.length - 1; i >= 0; i--) {
        result = result + matrix[index][i]
        index = index + 1
    }

    return result
}