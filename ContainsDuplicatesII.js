// 219. Contains Duplicate II
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.



// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false


// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105

var containsNearbyDuplicate = function (nums, k) {
    const obj = {}

    nums.map((num, i) => {
        num in obj ? obj[num].push(i) : obj[num] = [i]
    })

    for (key in obj) {
        if (obj[key].length > 1) {
            for (let i = 0; i < obj[key].length - 1; i++) {
                for (let j = i + 1; j < obj[key].length; j++) {
                    if (Math.abs(obj[key][i] - obj[key][j]) <= k) return true
                }
            }
        }
    }

    return false
};