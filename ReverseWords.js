// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
function reverseWords(str) {
    const arr = str.split(' ')
    const result = []
    arr.map((word) => {
        result.push(word.split('').reverse().join(''))
    })
    return result.join(' ')
}