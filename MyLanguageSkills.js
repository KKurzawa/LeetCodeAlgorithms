// You are given a dictionary-like object (implementation may vary by language) containing languages as keys and your corresponding test results as values. Return the list of languages where your score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

function myLanguages(results) {
    const obj = {}
    for (const key in results) {
        console.log(key)
        if (results[key] > 59) {
            obj[key] = results[key]
        }
    }
    const arr = Object.entries(obj).sort(([, a], [, b]) => b - a)
    const newObj = Object.fromEntries(arr)
    return Object.keys(newObj)
}