// Every month, a random number of students take the driving test at Fast & Furious (F&F) Driving School. To pass the test, a student cannot accumulate more than 18 demerit points.

// At the end of the month, F&F wants to calculate the average demerit points accumulated by ONLY the students who have passed, rounded to the nearest integer.

// Write a function which would allow them to do so. If no students passed the test that month, return 'No pass scores registered.'.

function passed(list) {
    let total = 0
    let count = 0
    for (let i = 0; i < list.length; i++) {
        if (list[i] < 19) {
            count++
            total = total + list[i]
        }
    }
    return count === 0 ? 'No pass scores registered.' : Math.round(total / count)
} 