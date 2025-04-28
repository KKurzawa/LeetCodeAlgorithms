// Count the number of exclamation marks and question marks, return the product.

function product(string) {
    let quest = 0
    let excl = 0

    for (let i = 0; i < string.length; i++) {
        if (string[i] === '!') {
            excl++
        } else if (string[i] === '?') {
            quest++
        }
    }

    return quest * excl
}