// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

var capitals = function (word) {
    const arr = word.split('')
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (/[A-Z]/.test(arr[i])) {
            result.push(i)
        }
    }
    return result
};