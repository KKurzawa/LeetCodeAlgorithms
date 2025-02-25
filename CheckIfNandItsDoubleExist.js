// Given an array arr of integers, check if there exist two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

function CheckDouble(arr) {
    const numSet = new Set();
    let result = false
    for (const num of arr) {
        if (numSet.has(2 * num) || numSet.has(num / 2)) {
            result = true;
        }
        numSet.add(num);
    }

    return result
};