// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

function validMountainArray(arr) {
    const maxNumber = Math.max(...arr);
    const index = arr.indexOf(maxNumber)
    let leftResult = true;
    let rightResult = true;
    let result = true;
    if (arr.length < 3 || index === 0 || index === arr.length - 1) {
        result = false
    }
    for (let i = 0; i < index; i++) {
        if (arr[i] >= arr[i + 1]) {
            leftResult = false
        }
    }
    for (let i = index; i < arr.length; i++) {
        if (arr[i] <= arr[i + 1]) {
            rightResult = false
        }
    }
    if (leftResult === false || rightResult === false) {
        result = false
    }
    return result
};