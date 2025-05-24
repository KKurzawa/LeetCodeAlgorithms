// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return undefined
        }
    }
    return arr.reduce((total, num) => {
        console.log(typeof num)
        let cube = 0
        if (num % 2 !== 0) {
            cube = num * num * num
        }
        return total + cube
    }, 0)
}