// The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

function unscrambleEggs(word) {
    const arr = word.split('')
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'e' && arr[i + 1] === 'g' && arr[i + 2] === 'g') {
            i += 2
        } else {
            result.push(arr[i])
        }
    }
    return result.join('')
}