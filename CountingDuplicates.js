// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
    const arr = text.toLowerCase().split('')
    const obj = {}
    let count = 0
    arr.map((letter) => {
        letter in obj === false ? obj[letter] = 1 : obj[letter] = obj[letter] += 1
    })
    for (const key in obj) {
        if (obj[key] > 1) {
            count += 1
        }
    }
    return count
}