// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
    const obj = {}
    arr.map((num) => {
        num in obj ? obj[num] += 1 : obj[num] = 1
    })
    return Number(Object.keys(obj).find(key => obj[key] === 1))
}