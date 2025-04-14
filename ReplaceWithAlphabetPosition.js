// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const result = []
    let lowerNum = text.toLowerCase()
    for (let i = 0; i < lowerNum.length; i++) {
        if (letters.includes(lowerNum[i])) {
            let num = lowerNum.charCodeAt(i) - 96
            result.push(num.toString())
        }
    }
    return result.join(' ')
}