// 917. Reverse Only Letters
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s, reverse the string according to the following rules:

// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.



// Example 1:

// Input: s = "ab-cd"
// Output: "dc-ba"
// Example 2:

// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
// Example 3:

// Input: s = "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"


// Constraints:

// 1 <= s.length <= 100
// s consists of characters with ASCII values in the range [33, 122].
// s does not contain '\"' or '\\'.

var reverseOnlyLetters = function (s) {
    const letters = s.split('').reverse().filter(char => /[\d!@#$%^&*=`'()_+{}\[\]:;<>,.?~\\/-]/.test(char) === false)

    for (let i = 0; i < s.length; i++) {
        if (/[\d!@#$%^&*=`'()_+{}\[\]:;<>,.?~\\/-]/.test(s[i])) {
            letters.splice(i, 0, s[i])
        }
    }

    return letters.join('')
};