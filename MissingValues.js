// You are given a sequence of positive ints where every element appears three times, except one that appears only once (let's call it x) and one that appears only twice (let's call it y).

// Your task is to find x * x * y.

function missingValues(arr) {
    const obj = {}
    let x = 0;
    let y = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in obj)) {
            obj[arr[i]] = 1
        } else {
            obj[arr[i]] = obj[arr[i]] + 1
        }
    }
    y = Object.keys(obj).find(key => obj[key] === 2);
    x = Object.keys(obj).find(key => obj[key] === 1);
    return x * x * y
}