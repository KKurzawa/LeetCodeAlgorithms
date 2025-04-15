// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

function findMissingLetter(array) {
    const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const upper = lower.map((letter) => letter.toUpperCase())
    if (array[0] === array[0].toLowerCase()) {
        let index = lower.indexOf(array[0])
        let arrayIndex = 0
        for (let i = index; i < index + array.length; i++) {
            if (array[arrayIndex] !== lower[i]) {
                return lower[i]
            }
            arrayIndex++
        }
    } else {
        let index = upper.indexOf(array[0])
        let arrayIndex = 0
        for (let i = index; i < index + array.length; i++) {
            if (array[arrayIndex] !== upper[i]) {
                return upper[i]
            }
            arrayIndex++
        }
    }
}