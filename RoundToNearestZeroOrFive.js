// Given an array of numbers, return an array, with each member of input array rounded to a nearest number, divisible by 5.

function roundToFive(numbers) {
    let result = []
    for (let i = 0; i < numbers.length; i++) {
        result.push(Math.round(numbers[i] / 5) * 5)
    }
    return result
}