// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"
// Don't forget to rate this kata! Thanks :)

String.prototype.camelCase = function () {
    if (this.length === 0) {
        return ''
    }
    const arr = this.split(' ')
    const result = []
    arr.map((word) => {
        result.push(word[0].toUpperCase() + word.slice(1))
    })
    return result.join('')
}