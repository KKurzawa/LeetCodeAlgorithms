// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

function addLength(str) {
    const arr = str.split(' ')
    for (let i = 0; i < arr.length; i++) {
        let number = arr[i].length.toString()
        console.log(number)
        arr[i] = arr[i] + ' ' + number
    }
    return arr
}