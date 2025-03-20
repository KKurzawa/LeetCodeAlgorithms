// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

function vowelOne(s) {
    const arr = s.toLowerCase().split('')
    const numArr = []
    arr.map((char) => {
        char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ? numArr.push('1') :
            numArr.push('0')
        console.log(char)
    })
    return numArr.join('')
}