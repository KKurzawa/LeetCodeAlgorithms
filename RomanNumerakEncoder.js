// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any digit with a value of zero. There cannot be more than 3 identical symbols in a row.

// In Roman numerals:

// 1990 is rendered: 1000=M + 900=CM + 90=XC; resulting in MCMXC.
// 2008 is written as 2000=MM, 8=VIII; or MMVIII.
// 1666 uses each Roman symbol in descending order: MDCLXVI.
// Example:

//    1 -->       "I"
// 1000 -->       "M"
// 1666 --> "MDCLXVI"
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

function solution(number) {
    const arr = number.toString().split('')
    const arr2 = []
    const zero = '0'
    const romanMap = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M'
    }
    const result = []

    arr.map((num, index) => {
        if (num !== zero) {
            arr2.push(parseInt(num + zero.repeat(arr.length - index - 1)))
        }
    })

    arr2.map((num) => {
        let length = Math.floor(Math.log10(Math.abs(num))) + 1

        if (length === 4) {
            while (num >= 1000) {
                result.push('M')
                num -= 1000
            }
        }

        if (length === 3) {
            if (num === 900) {
                result.push('C', 'M')
            } else if (num === 400) {
                result.push('C', 'D')
            } else if (num > 400 && num < 900) {
                result.push('D')
                num -= 500
                while (num >= 100) {
                    result.push('C')
                    num -= 100
                }
            } else if (num >= 100 && num < 400) {
                while (num >= 100) {
                    result.push('C')
                    num -= 100
                }
            }
        }

        if (length === 2) {
            if (num === 90) {
                result.push('X', 'C')
            } else if (num === 40) {
                result.push('X', 'L')
            } else if (num < 90 && num > 40) {
                result.push('L')
                num -= 50
                while (num >= 10) {
                    result.push('X')
                    num -= 10
                }
            } else if (num < 40 && num >= 10) {
                while (num >= 10) {
                    result.push('X')
                    num -= 10
                }
            }
        }

        if (length === 1) {
            if (num === 9) {
                result.push('I', 'X')
            } else if (num === 4) {
                result.push('I', 'V')
            } else if (num < 9 && num > 4) {
                result.push('V')
                num -= 5
                while (num >= 1) {
                    result.push('I')
                    num -= 1
                }
            } else if (num < 4) {
                while (num >= 1) {
                    result.push('I')
                    num -= 1
                }
            }
        }
    })
    return result.join('')
}