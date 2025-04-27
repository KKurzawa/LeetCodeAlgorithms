// Complete the function that returns the color of the given square on a normal, 8x8 chess board:

// 'a', 8  ==>  "white"
// 'b', 2  ==>  "black"
// 'f', 5  ==>  "white"

function mineColor(file, rank) {
    if (file === 'a' && rank % 2 === 0) {
        return 'white'
    } else if (file === 'b' && rank % 2 !== 0) {
        return 'white'
    } else if (file === 'c' && rank % 2 === 0) {
        return 'white'
    } else if (file === 'd' && rank % 2 !== 0) {
        return 'white'
    } else if (file === 'e' && rank % 2 === 0) {
        return 'white'
    } else if (file === 'f' && rank % 2 !== 0) {
        return 'white'
    } else if (file === 'g' && rank % 2 === 0) {
        return 'white'
    } else if (file === 'h' && rank % 2 !== 0) {
        return 'white'
    } else {
        return 'black'
    }
}
