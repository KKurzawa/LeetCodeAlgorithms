// Create an algorithm to count the number of zeros that appear between 1 and N.

function countZeros(n) {
    const arr = []
    count = 0
    for (let i = 1; i <= n; i++) {
        let num = i.toString()
        arr.push(num)
    }
    let str = arr.join('')
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') {
            count++
        }
    }
    return count
}