// Write a function that removes every lone 9 that is inbetween 7s.

function sevenAte9(str) {
    const arr = str.split('')
    const result = []
    for (let i = 0; i < arr.length; i++) {
        arr[i] === '9' && arr[i - 1] === '7' && arr[i + 1] === '7' ? console.log('9!') : result.push(arr[i])
    }
    return result.join('')
}