// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x) {
    const result = []
    const arr = x.split('')

    arr.map((char) => {
        char === 'a' ? result.push('b') : char === 'b' ? result.push('a') : result.push(char)
    })

    return result.join('')
}