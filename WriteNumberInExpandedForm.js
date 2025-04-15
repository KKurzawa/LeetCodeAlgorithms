// You will be given a number and you will need to return it as a string in Expanded Form. For example:

//    12 --> "10 + 2"
//    45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    let str = ''
    const arr = num.toString().split('')
    const zero = '0'
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i].toString())
        if (arr[i] !== '0') {
            str = ' ' + '+' + ' ' + arr[i] + zero.repeat(arr.length - i - 1) + str
        }
    }
    return str.slice(3)
}