// Given a name, turn that name into a perfect square matrix (nested array with the amount of arrays equivalent to the length of each array).

// You will need to add periods (.) to the end of the name if necessary, to turn it into a matrix.

// If the name has a length of 0, return "name must be at least one letter"

const matrixfy = str => {
    if (str.length === 0) {
        return 'name must be at least one letter'
    }
    const num = Math.ceil(Math.sqrt(str.length))
    const periods = num * num - str.length
    const period = '.'
    const newStr = str + period.repeat(periods)
    const arr = newStr.split('')
    const result = []
    for (let i = 0; i < arr.length; i += num) {
        result.push(arr.slice(i, i + num))
    }
    return result
};
