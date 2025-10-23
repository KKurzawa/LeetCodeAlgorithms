// 2085. Count Common Words With One Occurrence
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.



// Example 1:

// Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
// Output: 2
// Explanation:
// - "leetcode" appears exactly once in each of the two arrays. We count this string.
// - "amazing" appears exactly once in each of the two arrays. We count this string.
// - "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
// - "as" appears once in words1, but does not appear in words2. We do not count this string.
// Thus, there are 2 strings that appear exactly once in each of the two arrays.
// Example 2:

// Input: words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]
// Output: 0
// Explanation: There are no strings that appear in each of the two arrays.
// Example 3:

// Input: words1 = ["a","ab"], words2 = ["a","a","a","ab"]
// Output: 1
// Explanation: The only string that appears exactly once in each of the two arrays is "ab".


// Constraints:

// 1 <= words1.length, words2.length <= 1000
// 1 <= words1[i].length, words2[j].length <= 30
// words1[i] and words2[j] consists only of lowercase English letters.

var countWords = function (words1, words2) {
    const obj1 = {}
    const obj2 = {}
    let result = 0

    words1.map((str) => {
        str in obj1 ? obj1[str]++ : obj1[str] = 1
    })

    words2.map((str) => {
        str in obj2 ? obj2[str]++ : obj2[str] = 1
    })

    for (key in obj1) {
        if (obj1[key] === 1 && obj2[key] === 1) result++
    }

    return result++
};