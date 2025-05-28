// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

// Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"

function calculate(str) {
    const nums = str.split(/minus|plus/)
    const operators = []

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'm') {
            operators.push('minus')
        } else if (str[i] === 'p') {
            operators.push('plus')
        }
    }

    return String(nums.reduce((total, num, i) => {
        if (i !== 0 && operators[i - 1] === 'minus') {
            total -= parseInt(num)
        } else if (i !== 0 && operators[i - 1] === 'plus') {
            total += parseInt(num)
        }
        return total
    }, parseInt(nums[0])))
}