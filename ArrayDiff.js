// Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.

function arrayDiff(a, b) {
    const result = []
    a.map((num) => {
        if (!b.includes(num)) { result.push(num) }
    })
    return result
}