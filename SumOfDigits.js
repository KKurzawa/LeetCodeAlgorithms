// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digitalRoot(n) {
    let newN = n
    while (newN >= 10) {
        let num = newN.toString().split('')
        newN = 0
        const result = num.map((str) => {
            newN += Number(str)
        })
    }
    return newN
}