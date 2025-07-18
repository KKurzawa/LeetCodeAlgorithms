// Given a string of integers, count how many times that integer repeats itself, then return a string showing the count and the integer.

// Example: "1123"

// Here 1 comes twice so <count><integer> will be "21"
// then 2 comes once so <count><integer> will be "12"
// then 3 comes once so <count><integer> will be "13"
// hence output string will be "211213".

// Similarly "211213" will return "1221121113" (1 time 2, 2 times 1, 1 time 2, 1 time 1, 1 time 3)

// Return "" for empty, nil or non numeric strings

function countMe(data) {
    if (data === '') {
        return ''
    }

    let result = []
    let count = 0
    let num = data[0]

    for (let i = 0; i < data.length; i++) {
        if (/[0-9]/.test(data[i]) === false) {
            return ''
        }

        if (i === data.length - 1 && data[i] === num) {
            count++
            result.push(String(count), num)
        } else if (i === data.length - 1 && data[i] !== num) {
            result.push(String(count), num, '1', data[i])
        } else if (data[i] === num) {
            count++
        } else if (data[i] !== num) {
            result.push(String(count), num)
            count = 1
            num = data[i]
        }

    }

    return result.join('')
}