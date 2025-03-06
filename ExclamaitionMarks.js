// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

function replace(s) {
    const arr = s.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'a' || arr[i] === 'A' || arr[i] === 'e' || arr[i] === 'E' || arr[i] === 'i' || arr[i] === 'I' || arr[i] === 'o' || arr[i] === 'O' || arr[i] === 'u' || arr[i] === 'U') {
            arr.splice(i, 1, '!')
        }
    }
    return arr.join('')
}