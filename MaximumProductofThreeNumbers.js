// 628. Maximum Product of Three Numbers
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.



// Example 1:

// Input: nums = [1,2,3]
// Output: 6
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 24
// Example 3:

// Input: nums = [-1,-2,-3]
// Output: -6


// Constraints:

// 3 <= nums.length <= 104
// -1000 <= nums[i] <= 1000

var maximumProduct = function (nums) {
    nums.sort((a, b) => a - b)

    let left = nums[0] * nums[1] * nums[nums.length - 1]
    let right = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]

    return Math.max(left, right)
};