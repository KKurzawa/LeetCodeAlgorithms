// Given an array nums of integers, return how many of them contain an even number of digits.

function findNumbers(nums) {
    let count = 0;
    const stringArray = []
    for (let i = 0; i < nums.length; i++) {
        stringArray.push(nums[i].toString())
    }
    for (let j = 0; j < stringArray.length; j++) {
        if (stringArray[j].length % 2 === 0) {
            count++
        }
    }
    return count
};