// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

function multiplicationTable(size) {
    const result = []

    for (let i = 1; i <= size; i++) {
        let subArr = []
        for (let j = 1; j <= size; j++) {
            subArr.push(i * j)
        }
        result.push(subArr)
    }

    return result
}
