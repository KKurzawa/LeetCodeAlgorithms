// Given a string of space separated words, return the longest word.
// If there are multiple longest words, return the rightmost longest word.

function longestWord(stringOfWords) {
    const arr = stringOfWords.split(' ')
    let result = arr[0]
    if (arr.length === 1) {
        return stringOfWords
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= result.length) {
            result = arr[i]
        }
    }
    return result
}