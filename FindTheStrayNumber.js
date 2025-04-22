// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    const obj = {}
    numbers.map((num) => {
        num in obj ? obj[num] = obj[num] + 1 : obj[num] = 1
    })
    return parseInt(Object.keys(obj).find(key => obj[key] === 1))
}