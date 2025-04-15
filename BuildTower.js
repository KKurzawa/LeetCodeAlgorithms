// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(nFloors) {
    const result = []
    const space = ' '
    const ast = '*'
    for (let i = 1; i <= nFloors; i++) {
        result.push(space.repeat(nFloors - i) + ast.repeat(i * 2 - 1) + space.repeat(nFloors - i))
    }
    return result
}