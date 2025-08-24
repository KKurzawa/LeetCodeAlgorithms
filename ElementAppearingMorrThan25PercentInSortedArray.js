// 1287. Element Appearing More Than 25% In Sorted Array
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.



// Example 1:

// Input: arr = [1,2,2,6,6,6,6,7,10]
// Output: 6
// Example 2:

// Input: arr = [1,1]
// Output: 1


// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 105

var findSpecialInteger = function (arr) {
    const obj = {}
    let max = 0
    let result = ''

    arr.map((num) => {
        num in obj ? obj[num]++ : obj[num] = 1
    })

    for (key in obj) {
        if (obj[key] > max) {
            max = obj[key]
            result = key
        }
    }
    return Number(result)
};