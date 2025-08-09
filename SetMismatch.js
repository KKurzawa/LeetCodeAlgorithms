// 645. Set Mismatch
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.



// Example 1:

// Input: nums = [1,2,2,4]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1]
// Output: [1,2]


// Constraints:

// 2 <= nums.length <= 104
// 1 <= nums[i] <= 104

var findErrorNums = function (nums) {
    nums.sort((a, b) => a - b)
    let duplicate = 0
    const uniques = []

    for (let i = 0; i < nums.length; i++) {
        uniques.includes(nums[i]) ? duplicate = nums[i] : uniques.push(nums[i])
    }

    for (let i = 0; i < uniques.length; i++) {
        if (uniques[i] !== i + 1) return [duplicate, i + 1]
    }
    return [duplicate, nums.length]
};