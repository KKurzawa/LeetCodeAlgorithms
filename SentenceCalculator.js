// Calculate the total score (sum of the individual character scores) of a sentence given the following score rules for each allowed group of characters:

// Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
// Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
// Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
// Other characters: 0 value
// Note: input will always be a string

function lettersToNumbers(s) {
    count = 0
    for (let i = 0; i < s.length; i++) {
        if (/[a-z]/.test(s[i]) === true) {
            count += s.charCodeAt(i) - 96
        } else if (/[A-Z]/.test(s[i]) === true) {
            const num = s.toLowerCase().charCodeAt(i) - 96
            count += num * 2
        } else if (/[1-9]/.test(s[i]) === true) {
            count += parseInt(s[i])
        }
    }
    return count
}
