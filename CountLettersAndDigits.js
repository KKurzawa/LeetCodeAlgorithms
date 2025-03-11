// Bob is a lazy man.

// He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

function countLettersAndDigits(input) {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        if (/^[A-Za-z0-9]*$/.test(input[i])) {
            count++
        }
    }
    return count
}