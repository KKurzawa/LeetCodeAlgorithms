// You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.

// Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.

function sixToast(num) {
    const result = 6 - num
    let negResult = 0
    if (result < 0) {
        negResult = result.toString().slice(1)
        return parseInt(negResult)
    } else {
        return result
    }
}