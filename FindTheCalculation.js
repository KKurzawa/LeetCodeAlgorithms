// You have to create a function calcType, which receives 3 arguments: 2 numbers, and the result of an unknown operation performed on them (also a number).

// Based on those 3 values you have to return a string, that describes which operation was used to get the given result.

// The possible return strings are: "addition", "subtraction", "multiplication", "division".

// Example:
// calcType(1, 2, 3) -->   1 ? 2 = 3   --> "addition"
// Notes
// In case of division you should expect that the result of the operation is obtained by using / operator on the input values - no manual data type conversion or rounding should be performed.
// Cases with just one possible answers are generated.
// Only valid arguments will be passed to the function.
// Only valid arguments will be passed to the function!

function calcType(a, b, res) {
    return a + b === res ? 'addition'
        : a - b === res ? "subtraction"
            : a * b === res ? 'multiplication'
                : 'division'
}

