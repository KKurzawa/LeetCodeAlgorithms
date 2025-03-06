// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

function spEng(sentence) {
    const lwrSentence = sentence.toLowerCase()
    for (let i = 0; i < lwrSentence.length; i++) {
        if (lwrSentence[i] === 'e') {
            const englishCheck = lwrSentence.substring(i, i + 7)
            if (englishCheck === 'english') {
                return true
            }
        }
    }
    return false
}