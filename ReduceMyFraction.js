// Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

// input:   [numerator, denominator]
// output:  [reduced numerator, reduced denominator]
// example: [45, 120] --> [3, 8]
// All numerators and denominators will be positive integers.

function reduce(fraction) {
    if (fraction[0] > fraction[1]) {
        fraction.sort((a, b) => a - b)
        for (let i = fraction[0]; i > 0; i--) {
            if (fraction[0] % i === 0 && fraction[1] % i === 0) {
                return [fraction[1] / i, fraction[0] / i]
            }
        }
    } else {
        for (let i = fraction[0]; i > 0; i--) {
            if (fraction[0] % i === 0 && fraction[1] % i === 0) {
                return [fraction[0] / i, fraction[1] / i]
            }
        }
    }
}