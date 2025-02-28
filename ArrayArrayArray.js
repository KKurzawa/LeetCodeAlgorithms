// You are given an initial 2-value array (x). You will use this to calculate a score.

// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

// For example:

// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].


function explode(x) {
    let numCount = 0
    let letterCount = 0
    let result = []
    for (let i = 0; i < x.length; i++) {
        if (typeof x[i] === 'number') {
            numCount = numCount + x[i]
        } else if (typeof x[i] === 'string') {
            letterCount = letterCount + 1
            console.log(letterCount)
        }
    }
    if (numCount === 0 && letterCount === 2) {
        return "Void!"
    } else {
        for (let i = 0; i < numCount; i++) {
            result.push(x)
        }
        return result
    }
}