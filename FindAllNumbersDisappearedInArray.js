// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

function findDissapearedNums(nums) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        set.add(i + 1);
    }
    for (const num of nums) {
        set.delete(num);
    }
    return [...set];
};