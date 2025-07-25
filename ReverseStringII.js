// 541. Reverse String II
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.



// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"


// Constraints:

// 1 <= s.length <= 104
// s consists of only lowercase English letters.
// 1 <= k <= 104

var reverseStr = function (s, k) {
    const result = []
    let count = 1

    for (let i = 0; i < s.length;) {
        let storage = []
        while (storage.length < k) {
            storage.push(s[i])
            i++
        }
        count % 2 !== 0 ? result.push(storage.reverse()) : result.push(storage)
        count++
        storage = []
    }

    return result.flat().join('')
};