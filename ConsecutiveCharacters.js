
// Code
// Testcase
// Testcase
// Test Result
// 1446. Consecutive Characters
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// The power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Given a string s, return the power of s.



// Example 1:

// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.
// Example 2:

// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.


// Constraints:

// 1 <= s.length <= 500
// s consists of only lowercase English letters.

var maxPower = function (s) {
    let char = ''
    let result = 0
    let count = 1

    for (let i = 0; i < s.length; i++) {
        if (char === s[i]) {
            count++
        } else {
            if (count > result) result = count
            count = 1
            char = s[i]
        }
    }

    return result > count ? result : count
};