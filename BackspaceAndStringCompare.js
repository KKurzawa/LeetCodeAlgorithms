// 844. Backspace String Compare
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.



// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".


// Constraints:

// 1 <= s.length, t.length <= 200
// s and t only contain lowercase letters and '#' characters.


// Follow up: Can you solve it in O(n) time and O(1) space?

var backspaceCompare = function (s, t) {
    let sBack = 0
    let tBack = 0
    const sArr = []
    const tArr = []

    for (let i = s.length - 1; i >= 0; i--) {
        if (sBack === 0 && /[a-z]/.test(s[i])) {
            sArr.push(s[i])
        } else if (s[i] === '#') {
            sBack++
        } else if (sBack > 0 && /[a-z]/.test(s[i])) {
            sBack--
        }
    }

    for (let i = t.length - 1; i >= 0; i--) {
        if (tBack === 0 && /[a-z]/.test(t[i])) {
            tArr.push(t[i])
        } else if (t[i] === '#') {
            tBack++
        } else if (tBack > 0 && /[a-z]/.test(t[i])) {
            tBack--
        }
    }

    return sArr.reverse().join('') === tArr.reverse().join('')
};