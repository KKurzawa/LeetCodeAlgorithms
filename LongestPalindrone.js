// 409. Longest Palindrome
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome.



// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.


// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.

var longestPalindrome = function (s) {
    const storage = {}
    const odds = []

    for (let i = 0; i < s.length; i++) {
        s[i] in storage ? storage[s[i]] += 1 : storage[s[i]] = 1
    }

    for (key in storage) {
        if (storage[key] % 2 !== 0) {
            odds.push(storage[key])
        }
    }

    return odds.length ? s.length - odds.length + 1 : s.length
};