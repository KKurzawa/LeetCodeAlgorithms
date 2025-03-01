// There're k square apple boxes full of apples. If a box is of size m, then it contains m × m apples. You noticed two interesting properties about the boxes:

// The smallest box is of size 1, 
// the next one is of size 2,..., 
// all the way up to size k.

// Boxes that have an odd size contain only yellow apples. 
// Boxes that have an even size contain only red apples.
// Your task is to calculate the difference between the number of red apples and the number of yellow apples.

function appleBoxes(k) {
    let red = 0
    let yellow = 0
    for (let i = 1; i <= k; i++) {
        i % 2 === 0 ? red = red + i * i : yellow = yellow + i * i
    }
    return red - yellow
}