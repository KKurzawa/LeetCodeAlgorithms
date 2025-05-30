// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function (name) {
    let greeting = 'Hello '
    const arr = name.split('')

    arr.map((e, i) => {
        i === 0 ? greeting = greeting + e.toUpperCase() : greeting = greeting + e.toLowerCase()
    })

    return greeting + '!'
};