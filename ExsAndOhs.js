// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
function XO(str) {
    let x = 0;
    let o = 0;
    const arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase() === 'x') {
            x = x + 1
        } else if (arr[i].toLowerCase() === 'o') {
            o = o + 1
        }
    }
    return x === o
}