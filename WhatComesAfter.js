// You will be given two inputs: a string of words and a letter. For each string, return the alphabetic character after every instance of letter(case insensitive).

// If there is a number, punctuation or underscore following the letter, it should not be returned.

// If letter = 'r':
// "are you really learning Ruby?" # => "eenu"
// "Katy Perry is on the radio!"   # => "rya"
// "Pirates say arrrrrrrrr."       # => "arrrrrrrr"
// "r8 your friend"                # => "i"
// Return an empty string if there are no instances of letter in the given string.

function comes_after(str, l) {
    let result = []
    const upper = l.toUpperCase()
    const arr = str.split('')
    const regex = /[a-zA-Z]/

    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] === l || arr[i] === upper) && regex.test(arr[i + 1]) === true) {
            result.push(arr[i + 1])
        }
    }
    return result.join('')
}