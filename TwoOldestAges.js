// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// For example (Input --> Output):

// [1, 2, 10, 8] --> [8, 10]
// [1, 5, 87, 45, 8, 8] --> [45, 87]
// [1, 3, 10, 0]) --> [3, 10]

function twoOldestAges(ages) {
    ages.sort((a, b) => b - a)
    const high = ages[0]
    const obj = {}

    ages.map((num) => {
        num in obj ? obj[num] += 1 : obj[num] = 1
    })

    const result = []
    let bool = false
    let num = 0

    for (const key in obj) {
        if (obj[key] > 1 && key === high) {
            bool = true
            num = obj[key]
        }
    }

    if (bool === true) {
        for (let i = 1; i <= num; i++) {
            result.push(ages[0])
        }
    } else {
        return [ages[1], ages[0]]
    }

    return result
}
