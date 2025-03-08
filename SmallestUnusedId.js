// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

function nextId(ids) {
    const arr = []
    const sortedArr = ids.sort((a, b) => a - b)
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] !== sortedArr[i + 1]) {
            arr.push(sortedArr[i])
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i) {
            return i
        } else if (i === arr.length - 1) {
            return arr.length
        }
    }
}