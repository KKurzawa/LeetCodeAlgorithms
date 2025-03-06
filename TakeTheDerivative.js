// This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

// Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to return an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

function derive(coefficient, exponent) {
    const sum = coefficient * exponent
    const char = 'x^'
    const end = exponent - 1
    const result = sum.toString().concat(char).concat(end.toString())
    return result
}