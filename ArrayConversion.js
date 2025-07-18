// Given an array of 2k integers (for some integer k), perform the following operations until the array contains only one element:

// On the 1st, 3rd, 5th, etc. 
// iterations (1-based) replace each pair of consecutive elements with their sum;
// On the 2nd, 4th, 6th, etc. 
// iterations replace each pair of consecutive elements with their product.
// After the algorithm has finished, there will be a single element left in the array. Return that element.

// Example
// For inputArray = [1, 2, 3, 4, 5, 6, 7, 8], the output should be 186.

// We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186], so the answer is 186.

function arrayConversion(arr) {
    let count = 0
    function add() {
        for (let i = 0; i < arr.length; i++) {
            let num = arr[i] + arr[i + 1]
            arr.splice(i, 2, num)
        }
    }
    function multiply() {
        for (let i = 0; i < arr.length; i++) {
            let num = arr[i] * arr[i + 1]
            arr.splice(i, 2, num)
        }
    }
    while (arr.length > 2) {
        count % 2 === 0 ? add() : multiply()
        count += 1
    }
    return count % 2 === 0 ? arr[0] + arr[1] : arr[0] * arr[1]
}

function arrayConversion(arr) {
    let count = 1

    while (arr.length > 1) {
        for (let i = 0; i < arr.length; i++) {
            count % 2 !== 0 ? arr.splice(i, 2, arr[i] + arr[i + 1]) : arr.splice(i, 2, arr[i] * arr[i + 1])
        }
        count++
    }
    return arr[0]
}