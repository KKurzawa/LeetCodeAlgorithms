// You are given an integer array nums where the largest integer is unique.

// Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

function dominantIndex(nums) {
    const sortedNums = [...nums]
    sortedNums.sort((a, b) => a - b)
    const last = sortedNums.pop()
    let bool = true
    for (let i = 0; i < sortedNums.length; i++) {
        if (last < sortedNums[i] * 2) {
            bool = false
        }
    }
    if (bool === false) {
        return -1
    } else {
        return nums.indexOf(last)
    }
};