// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers) {
    let result = 0
    numbers.map((num) => {
        result += num * num
    })
    return result
}