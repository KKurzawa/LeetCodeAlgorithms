// Write a function

// vowel2index(str)
// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.

function vowel2index(str) {
    const arr = str.split('')
    let resultArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u' || arr[i] === 'A' || arr[i] === 'E' || arr[i] === 'I' || arr[i] === 'O' || arr[i] === 'U') {
            resultArr.push(i + 1)
        } else {
            resultArr.push(arr[i])
        }
    }
    return resultArr.join('')
}
