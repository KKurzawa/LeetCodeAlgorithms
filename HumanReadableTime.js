// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
    let hours = Math.floor(seconds / 60 / 60).toString()
    let minutes = Math.floor(seconds / 60) - hours * 60
    let minutes2 = minutes.toString()
    let seconds2 = seconds - Math.floor(seconds / 60) * 60
    let seconds3 = seconds2.toString()

    if (hours.length === 1) {
        hours = '0' + hours
    }

    if (minutes2.length === 1) {
        minutes2 = '0' + minutes2
    }

    if (seconds3.length === 1) {
        seconds3 = '0' + seconds3
    }

    return hours + ':' + minutes2 + ':' + seconds3
}