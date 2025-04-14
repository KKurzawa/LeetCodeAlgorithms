// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
    let number = num
    let count = 0
    while (number > 9) {
        const str = number.toString().split('')
        let result = '1'
        for (let i = 0; i < str.length; i++) {
            result = result * str[i]
        }
        number = result
        count++
    }
    return count
}