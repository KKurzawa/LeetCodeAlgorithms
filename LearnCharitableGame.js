// You have some people who are betting money, and they all start with the same amount of money (this number>0).

// Find out if the given end-state of amounts is possible after the betting is over and money is redistributed.

function learnCharitableGame(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count = count + arr[i]
    }
    if (count === 0) {
        return false
    } else if (arr.length === 1) {
        return true
    } else {
        return count % arr.length === 0 ? true : false
    }
}