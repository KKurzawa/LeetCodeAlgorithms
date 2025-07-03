// 18. 4Sum
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.



// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]


// Constraints:

// 1 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109

var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b)
    const result = []

    for (let i1 = 0; i1 < nums.length - 3; i1++) {
        if (i1 > 0 && nums[i1] === nums[i1 - 1]) {
            continue
        }

        for (let i2 = i1 + 1; i2 < nums.length - 2; i2++) {
            if (i2 > i1 + 1 && nums[i2] === nums[i2 - 1]) {
                continue
            }
            let i3 = i2 + 1
            let i4 = nums.length - 1

            while (i3 < i4) {
                let sum = nums[i1] + nums[i2] + nums[i3] + nums[i4]

                if (sum === target) {
                    result.push([nums[i1], nums[i2], nums[i3], nums[i4]]);

                    while (i3 < i4 && nums[i3] === nums[i3 + 1]) {
                        i3++;
                    }
                    while (i3 < i4 && nums[i4] === nums[i4 - 1]) {
                        i4--;
                    }

                    i3++;
                    i4--;
                } else if (sum < target) {
                    i3++;
                } else {
                    i4--;
                }
            }
        }
    }

    return result
};