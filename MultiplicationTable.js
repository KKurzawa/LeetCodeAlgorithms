// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line.

function multiTable(number) {
    const one = number * 1
    const two = number * 2
    const three = number * 3
    const four = number * 4
    const five = number * 5
    const six = number * 6
    const seven = number * 7
    const eight = number * 8
    const nine = number * 9
    const ten = number * 10

    return `1 * ${number} = ${one}\n2 * ${number} = ${two}\n3 * ${number} = ${three}\n4 * ${number} = ${four}\n5 * ${number} = ${five}\n6 * ${number} = ${six}\n7 * ${number} = ${seven}\n8 * ${number} = ${eight}\n9 * ${number} = ${nine}\n10 * ${number} = ${ten}`
}