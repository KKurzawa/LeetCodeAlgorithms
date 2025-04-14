// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
    const arr = word.toLowerCase().split('')
    const obj = {}
    const result = []
    arr.map((char) => {
        char in obj === false ? obj[char] = 1 : obj[char] = obj[char] += 1
    })
    arr.map((char) => {
        obj[char] === 1 ? result.push('(') : result.push(')')
    })
    return result.join('')
}