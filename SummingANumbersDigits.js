// Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5

function sumDigits(number) {
    const arr = number.toString().split('')
    let count = 0

    arr.map((num) => {
        if (num !== '-') {
            count += parseInt(num)
        }
    })
    return count
}