// 15. 3Sum
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.



// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.


// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    const result = []

    for (let i1 = 0; i1 < nums.length - 2; i1++) {
        if (i1 > 0 && nums[i1] === nums[i1 - 1]) {
            console.log(nums[i1])
            continue
        }

        let i2 = i1 + 1
        let i3 = nums.length - 1

        while (i2 < i3) {
            const sum = nums[i1] + nums[i2] + nums[i3]

            if (sum === 0) {
                result.push([nums[i1], nums[i2], nums[i3]])

                while (i2 < i3 && nums[i2] === nums[i2 + 1]) {
                    i2++
                }
                while (i2 < i3 && nums[i3] === nums[i3 - 1]) {
                    i3--
                }
                i2++
                i3--
            } else if (sum < 0) {
                i2++
            } else {
                i3--
            }

        }
    }

    return result
};