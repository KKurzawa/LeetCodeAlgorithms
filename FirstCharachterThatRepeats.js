// Find the first character that repeats in a String and return that character.

// firstDup('tweet') => 't'
// firstDup('like') => undefined
// This is not the same as finding the character that repeats first. In that case, an input of 'tweet' would yield 'e'.

// Another example:

// In 'translator' you should return 't', not 'a'.

// v      v  
// translator
//   ^   ^
// While second 'a' appears before second 't', the first 't' is before the first 'a'.

function firstDup(s) {
    const arr = s.split('').reverse()
    const uniqueArr = []
    const dupArr = []
    arr.map((e, i) => { !uniqueArr.includes(e) ? uniqueArr.push(e) : dupArr.push(e) })
    return dupArr[dupArr.length - 1]
}