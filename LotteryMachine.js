// Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function). Your code must filter out all letters and return unique integers as a string, in their order of first appearance. If there are no integers in the string return "One more run!"

function a() {
    const arr = str.split('')
    const resultArr = []
    for (let i = 0; i < arr.length; i++) {
        if (resultArr.includes(arr[i])) {
            console.log('includes')
        } else if (arr[i] === '0' ||
            arr[i] === '1' ||
            arr[i] === '2' ||
            arr[i] === '3' ||
            arr[i] === '4' ||
            arr[i] === '5' ||
            arr[i] === '6' ||
            arr[i] === '7' ||
            arr[i] === '8' ||
            arr[i] === '9'
        ) {
            console.log(!resultArr.includes(arr[i]))
            resultArr.push(arr[i])
        }
    }
    return resultArr.length === 0 ? "One more run!" : resultArr.join('')
}