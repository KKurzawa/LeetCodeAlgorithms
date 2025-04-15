// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
    const arr = x.split(' ')
    const obj = {}
    for (i = 0; i < arr.length; i++) {
        obj[arr[i]] = 0
        for (j = 0; j < arr[i].length; j++) {
            obj[arr[i]] = obj[arr[i]] + arr[i].charCodeAt(j) - 96
        }
    }
    const keys = Object.keys(obj)
    let highScore = obj[keys[0]]
    for (const key in obj) {
        if (obj[key] > highScore) {
            highScore = obj[key]
        }
    }
    return Object.keys(obj).find(key => obj[key] === highScore)
}