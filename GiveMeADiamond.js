// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

function diamond(n) {
    if (n < 0 || n % 2 === 0) {
        return null
    }
    const half = Math.ceil(n / 2)
    let result = ''
    const ast = '*'
    const space = ' '
    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            result = space.repeat(half - 1) + ast + '\n'
        } else if (i <= half) {
            result = result + space.repeat((n - (i * 2 - 1)) / 2) + ast.repeat(i * 2 - 1) + '\n'
        } else if (i === n) {
            result = result + space.repeat(half - 1) + ast + '\n'
        } else if (i > half && i !== n) {
            result = result + space.repeat((n - ((n - i) * 2 + 1)) / 2) + ast.repeat((n - i) * 2 + 1) + '\n'
        }
    }
    return result
}