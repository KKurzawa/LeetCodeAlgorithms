// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords(string) {
    const arr = string.split(' ')
    const result = []
    arr.map((word) => {
        word.length > 4 ? result.push(word.split('').reverse().join('')) : result.push(word)
    })
    return result.join(' ')
}