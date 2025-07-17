// 345. Reverse Vowels of a String
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.



// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"

// Output: "leotcede"



// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const vowels = ['a', 'e', 'i', 'o', 'u']

    const sArr = s.split('')

    let left = 0;
    let right = s.length - 1

    while (left < right) {
        if (vowels.includes(sArr[left].toLowerCase()) && vowels.includes(sArr[right].toLowerCase())) {
            [sArr[left], sArr[right]] = [sArr[right], sArr[left]]
            left++
            right--
        } else if (vowels.includes(sArr[left].toLowerCase()) && !vowels.includes(sArr[right].toLowerCase())) {
            right--
        } else if (vowels.includes(sArr[right].toLowerCase()) && !vowels.includes(sArr[left].toLowerCase())) {
            left++
        } else {
            left++
            right--
        }
    }

    return sArr.join('')
};