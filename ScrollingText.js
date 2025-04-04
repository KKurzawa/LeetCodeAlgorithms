// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

function scrollingText(text) {
    const result = [text.toUpperCase()]
    const arr = text.toUpperCase().split('')
    for (let i = 0; i < arr.length - 1; i++) {
        let str = arr.shift()
        arr.push(str)
        result.push(arr.join(''))

    }
    return result
}