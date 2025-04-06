// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

function keysAndValues(data) {
    const keys = Object.keys(data)
    const values = Object.values(data)
    return [keys, values]
}