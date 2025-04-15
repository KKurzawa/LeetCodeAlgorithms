// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
    const obj = {}
    const arr = []
    for (let i = 0; i < array.length; i++) {
        array[i] % 2 === 0 ? obj[i] = array[i] : arr.push(array[i])
    }
    arr.sort((a, b) => a - b)
    for (const key in obj) {
        arr.splice(Number(key), 0, obj[key])
    }
    return arr
}