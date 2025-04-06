// Given array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a smaller value. Store this value at position i in the answer. If no such value can be found, store -1 instead.

function arrayPreviousLess(arr) {
    const result = []
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] < arr[i]) {
                result.unshift(arr[j])
                break
            } else if (j === 0 && arr[j] >= arr[i]) {
                result.unshift(-1)
            }
        }
    }
    result.unshift(-1)
    return result

}