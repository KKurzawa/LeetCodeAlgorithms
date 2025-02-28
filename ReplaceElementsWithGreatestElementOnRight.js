// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

function replaceElements(arr) {
    let maxRight = -1
    for (let i = arr.length - 1; i >= 0; i--) {
        const current = arr[i]
        arr[i] = maxRight
        maxRight = Math.max(maxRight, current)
    }
    return arr
};