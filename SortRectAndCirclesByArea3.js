// In this kata you will be given a sequence of the dimensions of rectangles ( sequence with width and length ) and circles ( radius - just a number ).
// Your task is to return a new sequence of dimensions, sorted ascending by area.

// For example,

// const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
// sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444

function sortByArea(array) {
    const obj = []
    array.map((item) => {
        if (typeof item === 'number') {
            let area = item * item * Math.PI
            obj.push({ 'value': item, 'area': area })
        } else {
            let area = item[0] * item[1]
            obj.push({ 'value': item, 'area': area })
        }
    })
    obj.sort((a, b) => {
        if (a.area < b.area) {
            return -1
        }
        if (a.area > b.area) {
            return 1
        }
        return 0
    })
    const result = []
    obj.map((item) => {
        result.push(item.value)
    })
    return result
}