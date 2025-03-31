// You're a teacher preparing a test for your students. Each question is worth some number of points. Some of the questions are new to the students, while others are questions they have already seen and practiced. Your scoring system doubles the value of new questions. Your job is to determine the maximum possible score.

// Write a function doubleValue that accepts 1) an object of questions (as keys) and points (values) and 2) an array of new questions. The function should return the test's maximum possible score as an integer, where questions that are new are worth double points.

// You can assume that all questions are unique.

// Questions are case sensitive.

function maxPossibleScore(obj, arr) {
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = obj[arr[i]] * 2
    }
    const resultArr = Object.values(obj)
    for (let i = 0; i < resultArr.length; i++) {
        if (Number.isNaN(resultArr[i])) {
            resultArr.splice(i, 1)
        }
    }
    const result = resultArr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)
    return result
}