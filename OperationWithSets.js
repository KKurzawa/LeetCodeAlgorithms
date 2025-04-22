// We need a function that receives two arrays, each of them with elements that occur only once. We need to know:

// Number of elements that are present in both arrays
// Number of elements that are present in only one array
// Number of remaining elements in arr1 after extracting the elements of arr2
// Number of remaining elements in arr2 after extracting the elements of arr1
// Example
// arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// arr2 = [2, 4, 6, 8, 10, 12, 14]
// The result is: [4, 8, 5, 3]

// 4 elements present in both arrays: 2, 4, 6, 8
// 8 elements present in only one array: 1, 3, 5, 7, 9, 10, 12, 14
// 5 elements remaning in arr1: 1, 3, 5, 7, 9
// 3 elements remaning in arr2: 10, 12, 14
// No doubt, an easy kata to warm up before doing the more complex ones. Enjoy it!

function process2Arrays(arr1, arr2) {
    const dups = []
    const unique = []
    const arr1unique = []
    const arr2unique = []

    arr1.map((num) => {
        arr2.includes(num) ? dups.push(num) : unique.push(num) && arr1unique.push(num)
    })

    arr2.map((num) => {
        if (!arr1.includes(num)) {
            unique.push(num)
            arr2unique.push(num)
        }
    })

    return [dups.length, unique.length, arr1unique.length, arr2unique.length]
}