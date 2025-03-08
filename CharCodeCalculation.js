// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

function calc(x) {
    const numArr = []
    for (let i = 0; i < x.length; i++) {
        numArr.push(x.charCodeAt(i))
    }
    const strArr = numArr.join('').split('')
    const strArrTwo = []
    let countOne = 0
    let countTwo = 0
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === '7') {
            strArrTwo.push('1')
        } else {
            strArrTwo.push(strArr[i])
        }
    }
    for (let i = 0; i < strArr.length; i++) {
        countOne = countOne + parseInt(strArr[i])
    }
    for (let i = 0; i < strArrTwo.length; i++) {
        countTwo = countTwo + parseInt(strArrTwo[i])
    }
    return countOne - countTwo
}