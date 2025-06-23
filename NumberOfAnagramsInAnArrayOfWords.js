// An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

// Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it.

// Some examples:

// There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
// There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]


function anagramCounter(wordsArray) {
    const sortedArray = wordsArray.map((word) => word.split('').sort().join(''))
    const obj = {}
    let anograms = 0

    sortedArray.map((word) => {
        word in obj ? obj[word] = obj[word] += 1 : obj[word] = 1
    })

    for (let key in obj) {
        if (obj[key] === 2) {
            anograms = anograms += 1
        } else if (obj[key] > 2) {
            for (let i = obj[key] - 1; i >= 1; i--) {
                anograms = anograms += i
            }
        }
    }
    return anograms
}