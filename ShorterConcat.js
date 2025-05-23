// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b

function shorterReverseLonger(a, b) {
    if (a.length === b.length) {
        const rev = a.split('').reverse().join('')
        return b + rev + b
    } else {
        const short = a.length < b.length ? a : b
        const long = a.length > b.length ? a : b
        const longTwo = long.split('').reverse().join('')
        return short + longTwo + short
    }
}