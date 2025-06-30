// 16. 3Sum Closest
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.



// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).


// Constraints:

// 3 <= nums.length <= 500
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104


var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b)
    let closestSum = nums[0] + nums[1] + nums[2]

    for (let i1 = 0; i1 < nums.length - 2; i1++) {
        let i2 = i1 + 1
        let i3 = nums.length - 1

        while (i2 < i3) {
            let currentSum = nums[i1] + nums[i2] + nums[i3]

            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum
            }

            if (currentSum < target) {
                i2++
            } else if (currentSum > target) {
                i3--
            } else {
                return currentSum
            }
        }
    }

    return closestSum
};