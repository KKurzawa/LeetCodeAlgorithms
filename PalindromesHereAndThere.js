// An array is given with palindromic and non-palindromic numbers. A palindromic number is a number that is the same from a reversed order. For example 122 is not a palindromic number, but 202 is one.

// Your task is to write a function that returns an array with only 1s and 0s, where all palindromic numbers are replaced with a 1 and all non-palindromic numbers are replaced with a 0.

function convertPalindromes(numbers) {
    let result = []
    for (let i = 0; i < numbers.length; i++) {
        let reverseNum = parseInt(numbers[i].toString().split('').reverse().join(''))
        if (reverseNum === numbers[i]) {
            result.push(1)
        } else {
            result.push(0)
        }
    }
    return result
};