// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

// For example:

// solve("xyab","xzca") = "ybzc" 
// --The first string has 'yb' which is not in the second string. 
// --The second string has 'zc' which is not in the first string. 
// Notice also that you return the characters from the first string concatenated with those from the second string.

// More examples in the tests cases.

// Good luck!

function solve(a, b) {
    const result = []
    const arrayA = a.split('')
    const arrayB = b.split('')

    arrayA.map((char) => {
        if (!b.includes(char)) {
            result.push(char)
        }
    })

    arrayB.map((char) => {
        if (!a.includes(char)) {
            result.push(char)
        }
    })

    return result.join('')
};