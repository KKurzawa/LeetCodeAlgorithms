// 1704. Determine if String Halves Are Alike
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.



// Example 1:

// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
// Example 2:

// Input: s = "textbook"
// Output: false
// Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
// Notice that the vowel o is counted twice.


// Constraints:

// 2 <= s.length <= 1000
// s.length is even.
// s consists of uppercase and lowercase letters.

var halvesAreAlike = function (s) {
    const vowels = ['a', 'e', 'i', 'o', 'u']

    let count1 = 0
    let count2 = 0

    for (let i = 0; i < s.length; i++) {
        if (i < s.length / 2 && vowels.includes(s[i].toLowerCase())) {
            count1++
        } else if (i >= s.length / 2 && vowels.includes(s[i].toLowerCase())) {
            count2++
        }
    }

    return count1 === count2
};