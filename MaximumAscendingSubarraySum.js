// 1800. Maximum Ascending Subarray Sum
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an array of positive integers nums, return the maximum possible sum of an strictly increasing subarray in nums.

// A subarray is defined as a contiguous sequence of numbers in an array.



// Example 1:

// Input: nums = [10,20,30,5,10,50]
// Output: 65
// Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.
// Example 2:

// Input: nums = [10,20,30,40,50]
// Output: 150
// Explanation: [10,20,30,40,50] is the ascending subarray with the maximum sum of 150.
// Example 3:

// Input: nums = [12,17,15,13,10,11,12]
// Output: 33
// Explanation: [10,11,12] is the ascending subarray with the maximum sum of 33.


// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

var maxAscendingSum = function (nums) {
    if (nums.length === 1) return nums[0]
    let result = 0
    let temp = nums[0]

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1] && i === nums.length - 1) {
            temp += nums[i]
            if (temp > result) result = temp
        } else if (nums[i] <= nums[i - 1]) {
            if (temp > result) result = temp
            temp = nums[i]
        } else {
            temp += nums[i]
        }
    }

    return result
};