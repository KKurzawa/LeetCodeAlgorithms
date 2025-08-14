// 884. Uncommon Words from Two Sentences
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// A sentence is a string of single-space separated words where each word consists only of lowercase letters.

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.



// Example 1:

// Input: s1 = "this apple is sweet", s2 = "this apple is sour"

// Output: ["sweet","sour"]

// Explanation:

// The word "sweet" appears only in s1, while the word "sour" appears only in s2.

// Example 2:

// Input: s1 = "apple apple", s2 = "banana"

// Output: ["banana"]



// Constraints:

// 1 <= s1.length, s2.length <= 200
// s1 and s2 consist of lowercase English letters and spaces.
// s1 and s2 do not have leading or trailing spaces.
// All the words in s1 and s2 are separated by a single space.

var uncommonFromSentences = function (s1, s2) {
    let result = []

    const s1Arr = s1.split(' ')
    const s2Arr = s2.split(' ')

    const s1obj = {}
    const s2obj = {}

    for (let i = 0; i < s1Arr.length; i++) {
        s1Arr[i] in s1obj ? s1obj[s1Arr[i]]++ : s1obj[s1Arr[i]] = 1
    }

    for (let i = 0; i < s2Arr.length; i++) {
        s2Arr[i] in s2obj ? s2obj[s2Arr[i]]++ : s2obj[s2Arr[i]] = 1
    }

    for (key in s1obj) {
        if (s1obj[key] === 1 && !s2Arr.includes(key)) result.push(key)
    }

    for (key in s2obj) {
        if (s2obj[key] === 1 && !s1Arr.includes(key)) result.push(key)
    }

    return result
};