// Given a square matrix (i.e. an array of subarrays), find the sum of values from the first value of the first array, the second value of the second array, the third value of the third array, and so on...

function diagonalSum(matrix) {
    let result = 0
    matrix.map((arr, index) => { result += arr[index] })
    return result
}