// 17. Letter Combinations of a Phone Number
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.




// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]


// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

var letterCombinations = function (digits) {
    const obj = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }

    if (digits.length === 0) {
        return []
    } else if (digits.length === 1) {
        return obj[digits]
    }

    const letters = []
    const result = []

    for (let i = 0; i < digits.length; i++) {
        letters.push(obj[digits[i]])
    }

    const flatLetters = letters.flat()

    function two() {
        for (let i = 0; i < letters[0].length; i++) {
            let pointer = letters[0].length

            while (pointer < flatLetters.length) {
                result.push(flatLetters[i] + flatLetters[pointer])
                pointer++
            }
        }
    }

    function three() {
        for (let i = 0; i < letters[0].length; i++) {
            let pointer = letters[0].length
            let pointerTwo = letters[0].length * 2

            while (pointer < letters[0].length + letters[1].length) {
                while (pointerTwo < flatLetters.length) {
                    result.push(flatLetters[i] + flatLetters[pointer] + flatLetters[pointerTwo])
                    pointerTwo++
                }
                pointer++
                pointerTwo = letters[0].length * 2
            }
        }
    }

    function four() {
        for (let i = 0; i < letters[0].length; i++) {
            let pointer = letters[0].length
            let pointerTwo = letters[0].length + letters[1].length
            let pointerThree = letters[0].length + letters[1].length + letters[2].length

            while (pointer < letters[0].length + letters[1].length) {
                while (pointerTwo < letters[0].length + letters[1].length + letters[2].length) {
                    while (pointerThree < flatLetters.length) {
                        result.push(flatLetters[i] + flatLetters[pointer] + flatLetters[pointerTwo] + flatLetters[pointerThree])
                        pointerThree++
                    }
                    pointerTwo++
                    pointerThree = letters[0].length + letters[1].length + letters[2].length
                }
                pointer++
                pointerTwo = letters[0].length + letters[1].length
                pointerThree = letters[0].length + letters[1].length + letters[2].length
            }
        }
    }

    digits.length === 2 ? two() : digits.length === 3 ? three() : four()

    return result
};