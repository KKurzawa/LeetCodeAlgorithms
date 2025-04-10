// Remove all exclamation marks from the end of sentence.

function remove(string) {
    const arr = string.split('')
    let result = []
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== '!') {
            result = arr.splice(i += 1, arr.length - i)
            break
        }
    }
    return arr.join('')
}