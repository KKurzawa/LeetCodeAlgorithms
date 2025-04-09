// An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. 

function solve(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] <= arr[j + 1]) {
                break
            } else if (j === arr.length - 1 && arr[j] < arr[i]) {
                result.push(arr[i])
            }
        }
    }
    result.push(arr[arr.length - 1])
    return result
}