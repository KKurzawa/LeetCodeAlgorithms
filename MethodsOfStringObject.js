// Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

// The first mission: Traversing arr, find the shortest string length.

// The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.

function cutIt(arr) {
    let arrLength = []
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let strLength = arr[i].length
        arrLength.push(strLength)
    }
    const sortedArrLength = arrLength.sort((a, b) => a - b)
    const num = sortedArrLength[0]
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i].slice(0, num)
        result.push(str)
    }
    return result
}