// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
    const arr = s.split(' ')
    let result = arr[0].length
    arr.map((word) => {
        if (word.length < result) {
            result = word.length
        }
    })
    return result
}