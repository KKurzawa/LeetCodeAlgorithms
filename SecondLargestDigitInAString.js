
// Code
// Testcase
// Testcase
// Test Result
// 1796. Second Largest Digit in a String
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// An alphanumeric string is a string consisting of lowercase English letters and digits.



// Example 1:

// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
// Example 2:

// Input: s = "abc1111"
// Output: -1
// Explanation: The digits that appear in s are [1]. There is no second largest digit. 


// Constraints:

// 1 <= s.length <= 500
// s consists of only lowercase English letters and digits.

var secondHighest = function (s) {
    const obj = {}

    const numArr = s.split('').filter(char => /[0-9]/.test(char)).map((num) => {
        num in obj ? obj[num]++ : obj[num] = 1
    })

    const nums = []

    for (key in obj) {
        nums.push(Number(key))
    }

    return nums.length < 2 ? -1 : nums[nums.length - 2]
};