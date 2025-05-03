// Given some positive integers, I wish to print the integers such that all take up the same width by adding a minimum number of leading zeroes. No leading zeroes shall be added to the largest integer.

// For example, given 1, 23, 2, 17, 102, I wish to print out these numbers as follows:

// 001
// 023
// 002
// 017
// 102
// Write a function that takes a variable number of integers and returns the string to be printed out.

function printNums(...args) {
    const strArr = []
    let size = 0

    args.map((num) => {
        strArr.push(num.toString())
        if (num.toString().length > size) {
            size = num.toString().length
        }
    })

    let result = []
    const zero = '0'

    strArr.map((str) => {
        str.length < size ? result.push(zero.repeat(size - str.length) + str) : result.push(str)
    })

    return result.join('\n')
}