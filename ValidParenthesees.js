// 20. Valid Parentheses
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

var isValid = function (s) {
    const storage = []
    const obj = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] in obj) {
            storage.push(obj[s[i]])
        } else {
            if (storage.length === 0 || storage.pop() !== s[i]) {
                return false
            }
        }
    }

    return storage.length === 0
};


