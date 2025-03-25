// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

function initializeNames(name) {
    const arr = name.split(' ')
    if (arr.length === 1 || arr.length === 2) {
        return name
    }
    let resultArr = [arr[0]]
    for (let i = 1; i < arr.length - 1; i++) {
        resultArr.push(arr[i].charAt(0) + '.')
    }
    resultArr.push(arr[arr.length - 1])
    return resultArr.join(' ')
}