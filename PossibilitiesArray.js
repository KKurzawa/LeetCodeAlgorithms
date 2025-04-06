// A non-empty array a of length n is called an array of all possibilities if it contains all numbers between 0 and a.length - 1 (both inclusive).

// Write a function that accepts an integer array and returns true if the array is an array of all possibilities, else false.

function isAllPossibilities(x) {
    x.sort((a, b) => a - b)
    for (let i = 0; i < x.length; i++) {
        if (i !== x[i]) {
            return false
        }
    }
    return true
}