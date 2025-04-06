// Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.

function capMe(names) {
    const result = []
    for (let i = 0; i < names.length; i++) {
        result.push(names[i][0].toUpperCase() + names[i].toLowerCase().slice(1))
    }
    return result
}