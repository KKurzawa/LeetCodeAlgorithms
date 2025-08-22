// 1154. Day of the Year
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.



// Example 1:

// Input: date = "2019-01-09"
// Output: 9
// Explanation: Given date is the 9th day of the year in 2019.
// Example 2:

// Input: date = "2019-02-10"
// Output: 41


// Constraints:

// date.length == 10
// date[4] == date[7] == '-', and all other date[i]'s are digits
// date represents a calendar date between Jan 1st, 1900 and Dec 31st, 2019.

var dayOfYear = function (date) {
    const arr = date.split('-')
    const year = Number(arr[0])
    const month = Number(arr[1])
    let day = Number(arr[2])

    const values = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    let daysInMonths = 0

    for (let i = 0; i < month - 1; i++) {
        daysInMonths += values[i]
    }

    if ((year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) && month > 2) day++

    return day + daysInMonths
};

var dayOfYear = function (date) {
    const arr = date.split('-')
    const year = Number(arr[0])
    const month = Number(arr[1])
    let day = Number(arr[2])

    const daysInMonths = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365]

    if ((year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) && month > 2) day++

    return month === 1 ? day : day + daysInMonths[month - 2]
};