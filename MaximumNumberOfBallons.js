// 1189. Maximum Number of Balloons
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.



// Example 1:



// Input: text = "nlaebolko"
// Output: 1
// Example 2:



// Input: text = "loonbalxballpoon"
// Output: 2
// Example 3:

// Input: text = "leetcode"
// Output: 0


// Constraints:

// 1 <= text.length <= 104
// text consists of lower case English letters only.

var maxNumberOfBalloons = function (text) {
    const obj = {
        b: 0,
        a: 0,
        l1: 0,
        l2: 0,
        o1: 0,
        o2: 0,
        n: 0
    }

    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'l' && obj['l1'] <= obj['l2']) {
            obj['l1']++
        } else if (text[i] === 'l' && obj['l1'] > obj['l2']) {
            obj['l2']++
        } else if (text[i] === 'o' && obj['o1'] <= obj['o2']) {
            obj['o1']++
        } else if (text[i] === 'o' && obj['o1'] > obj['o2']) {
            obj['o2']++
        } else if (text[i] in obj) {
            obj[text[i]]++
        }
    }

    const values = Object.values(obj)

    return Math.min(...values)
};
