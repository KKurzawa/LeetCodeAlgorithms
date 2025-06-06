// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

// 2332
// 110011
// 54322345

// You'll be given 2 numbers as arguments: (num,s). Write a function which returns an array of s number of numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count.

// Return "Not valid" instead if any one of the inputs is not an integer or is less than 0.

function palindrome(num, s) {
    if (typeof num !== 'number' || typeof s !== 'number' || num < 0 || s < 0) {
        return "Not valid"
    }
    let startNum = 0
    num < 11 ? startNum = 10 : startNum = num - 1
    count = 0;
    const result = []
    while (result.length < s) {
        startNum++
        const reverseNum = parseInt(startNum.toString().split('').reverse().join(''))
        if (startNum === reverseNum) {
            result.push(startNum)
        }
    }
    return result
}