function maxOnes(nums) {
    let maxOnes = 0;
    let ones = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            ones++
            maxOnes = Math.max(maxOnes, ones);
        } else {
            ones = 0
        }
    }
    return maxOnes
};