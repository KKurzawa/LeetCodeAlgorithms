// Write a function that accepts a string, and returns true if it is in the form of a phone number.
// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses)

// Examples:

// "(123) 456-7890"  => true
// "(1111)555 2345"  => false
// "(098) 123 4567"  => false

function validPhoneNumber(phoneNumber) {
    if (phoneNumber.length !== 14) {
        return false
    }
    const arr = phoneNumber.split('')
    return arr[0] === '(' && typeof Number(arr[1]) === 'number' && typeof Number(arr[2]) === 'number' && typeof Number(arr[3]) === 'number' && arr[4] === ')' && arr[5] === ' ' && typeof Number(arr[6]) === 'number' && typeof Number(arr[7]) === 'number' && typeof Number(arr[8]) === 'number' && arr[9] === '-' && typeof Number(arr[10]) === 'number' && typeof Number(arr[11]) === 'number' && typeof Number(arr[12]) === 'number' && typeof Number(arr[13]) === 'number'
}