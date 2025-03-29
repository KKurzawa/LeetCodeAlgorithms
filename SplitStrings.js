// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str) {
    if (str.length === 0) {
        return []
    }
    let last = ''
    let result = []
    const arr = str.split('')
    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i] + arr[i + 1])
    }
    if (result[result.length - 1].includes('undefined')) {
        last = result[result.length - 1].replace('undefined', '_')
        result.pop()
        result.push(last)
    }
    return result
}