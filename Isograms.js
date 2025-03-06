// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
    const arr = str.toLowerCase().split('')
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in obj)) {
            obj[arr[i]] = 1
        } else {
            obj[arr[i]] = obj[arr[i]] + 1
        }
    }
    const values = Object.values(obj)
    if (str.length === 0) {
        return true
    } else {
        for (let i = 0; i < values.length; i++) {
            if (values[i] !== 1) {
                return false
            }
        }
    }
    return true
}