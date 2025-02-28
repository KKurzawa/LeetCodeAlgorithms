// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

function thirdMax(nums) {
    const result = []
    for (let i = 0; i < nums.length; i++) {
        let bool = result.includes(nums[i])
        if (bool === false) {
            result.push(nums[i])
        }
    }
    result.sort((a, b) => b - a)
    if (result.length === 1 || result.length === 2) {
        return result[0]
    } else {
        return result[2]
    }
};