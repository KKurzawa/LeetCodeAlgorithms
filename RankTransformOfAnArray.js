
// Code
// Testcase
// Testcase
// Test Result
// 1331. Rank Transform of an Array
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an array of integers arr, replace each element with its rank.

// The rank represents how large the element is. The rank has the following rules:

// Rank is an integer starting from 1.
// The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
// Rank should be as small as possible.


// Example 1:

// Input: arr = [40,10,20,30]
// Output: [4,1,2,3]
// Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.
// Example 2:

// Input: arr = [100,100,100]
// Output: [1,1,1]
// Explanation: Same elements share the same rank.
// Example 3:

// Input: arr = [37,12,28,9,100,56,80,5,12]
// Output: [5,3,4,2,8,6,7,1,3]


// Constraints:

// 0 <= arr.length <= 105
// -109 <= arr[i] <= 109

var arrayRankTransform = function (arr) {
    const sorted = arr.toSorted((a, b) => a - b)
    const obj = {}
    let rank = 1
    const result = []

    sorted.map((num) => {
        if (!obj[num]) obj[num] = rank++
    })

    arr.map((num) => {
        result.push(obj[num])
    })

    return result
};