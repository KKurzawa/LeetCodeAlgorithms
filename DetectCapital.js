// 520. Detect Capital
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.



// Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false


// Constraints:

// 1 <= word.length <= 100
// word consists of lowercase and uppercase English letters.

var detectCapitalUse = function (word) {
    if (word === word.toLowerCase() || word === word.toUpperCase()) return true

    if (word[0] === word[0].toLowerCase()) return false

    for (let i = 1; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) return false
    }

    return true
};