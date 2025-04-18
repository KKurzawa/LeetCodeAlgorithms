// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr) {
    arr.sort((a, b) => a - b)
    return [arr[0], arr[arr.length - 1]]
}