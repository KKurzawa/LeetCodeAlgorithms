// 594. Longest Harmonious Subsequence
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.



// Example 1:

// Input: nums = [1,3,2,2,5,2,3,7]

// Output: 5

// Explanation:

// The longest harmonious subsequence is [3,2,2,2,3].

// Example 2:

// Input: nums = [1,2,3,4]

// Output: 2

// Explanation:

// The longest harmonious subsequences are [1,2], [2,3], and [3,4], all of which have a length of 2.

// Example 3:

// Input: nums = [1,1,1,1]

// Output: 0

// Explanation:

// No harmonic subsequence exists.



// Constraints:

// 1 <= nums.length <= 2 * 104
// -109 <= nums[i] <= 109

var findLHS = function (nums) {
    nums.sort((a, b) => a - b)
    const options = []
    let resultNums = []
    const result = []

    for (let i = 0; i < nums.length; i++) {
        let subArr = [nums[i]]
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === nums[i] || nums[j] === nums[i] + 1) {
                subArr.push(nums[j])
            }
        }
        options.push(subArr)
    }

    for (let i = 0; i < options.length; i++) {
        for (let j = 0; j < options[i].length; j++) {
            if (resultNums.includes(options[i][j]) === false) resultNums.push(options[i][j])
        }
        if (resultNums.length === 2) result.push(options[i])
        resultNums = []
    }

    result.sort((a, b) => b.length - a.length)

    return result.length === 0 ? 0 : result[0].length
};