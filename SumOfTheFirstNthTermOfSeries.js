// Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

// S
// e
// r
// i
// e
// s
// :
// 1
// +
// 1
// 4
// +
// 1
// 7
// +
// 1
// 10
// +
// 1
// 13
// +
// 1
// 16
// +
// …
// Series:1+ 
// 4
// 1
// ​
//  + 
// 7
// 1
// ​
//  + 
// 10
// 1
// ​
//  + 
// 13
// 1
// ​
//  + 
// 16
// 1
// ​
//  +…
// You will need to figure out the rule of the series to complete this.

// Rules
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return "0.00".

// You will only be given Natural Numbers as arguments.

function SeriesSum(n) {
    if (n === 0) {
        return '0.00'
    }
    let num = 4
    let result = 1
    for (let i = 1; i < n; i++) {
        result = result + 1 / num
        num += 3
    }
    const resultNum = +(Math.round(result + "e+2") + "e-2")
    const resultString = resultNum.toString()
    return resultString.length === 3 ? resultString + '0' :
        resultString.length === 1 ? resultString + '.00' :
            resultString
}

