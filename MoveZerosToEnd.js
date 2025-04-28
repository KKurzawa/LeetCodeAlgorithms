// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
    const start = []
    const end = []

    arr.map((e) => {
        e === 0 ? end.push(e) : start.push(e)
    })

    return [start, end].flat()
}