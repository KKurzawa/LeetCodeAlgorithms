// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
    const dupCheck = []
    const arr = s1.concat(s2).split('').sort()
    let result = ''
    arr.map((letter) => {
        if (!dupCheck.includes(letter)) {
            result = result + letter
        }
        dupCheck.push(letter)
    })
    return result
}