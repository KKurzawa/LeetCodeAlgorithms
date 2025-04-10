// Write a function that takes a string (like the one line example) as an argument, returns a new string that is formatted across multiple lines, with each new sentence starting on a new line when you print it out.

// Try to solve this challenge with the str.split() and the str.join() string methods.

// Every sentence will end with a period, and every new sentence will have one space before the previous period. Be careful about trailing whitespace in your solution.

function formatPoem(poem) {
    return poem.split('. ').join('.\n')
}