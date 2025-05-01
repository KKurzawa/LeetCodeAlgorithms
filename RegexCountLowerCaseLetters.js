// Your task is simply to count the total number of lowercase letters in a string.

function lowercaseCount(str) {
    let count = 0
    const regex = /[a-z]/
    for (let i = 0; i < str.length; i++) {
        if (regex.test(str[i])) {
            count++
        }
    }
    return count
}