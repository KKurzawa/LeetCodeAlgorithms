// Create a function which accepts one arbitrary string as an argument, and return a string of length 26.

// The objective is to set each of the 26 characters of the output string to either '1' or '0' based on the fact whether the Nth letter of the alphabet is present in the input (independent of its case).

// So if an 'a' or an 'A' appears anywhere in the input string (any number of times), set the first character of the output string to '1', otherwise to '0'. if 'b' or 'B' appears in the string, set the second character to '1', and so on for the rest of the alphabet.

// For instance:

// "a   **&  cZ"  =>  "10100000000000000000000001"
// "aaaaaaa79345675"  =>  "10000000000000000000000000"
// "&%#*"  =>  "00000000000000000000000000"

function change(string) {
    const arr = new Array(26)
    arr.fill('0', 0, 26)
    const lowerStr = string.toLowerCase()

    for (let i = 0; i < string.length; i++) {
        if (/[a-z]/.test(lowerStr[i].toLowerCase()) === true) {
            arr[lowerStr.charCodeAt(i) - 97] = '1'
            console.log(true)
        }
    }

    return arr.join('')
}