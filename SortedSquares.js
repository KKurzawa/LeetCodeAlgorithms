// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

function sortedSquares(nums) {
    const result = []
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] * nums[i]
        result.push(num)
    }
    return result.sort((a, b) => a - b)
};