// Write a regex to validate a 24 hours time string. See examples to figure out what you should check for:

// Accepted: 01:00, 1:00, 00:00

// Not accepted: 24:00, 13:1, 12:60

// You should check for correct length and no spaces.

function validateTime(time) {
    const regOne = /[0-2]/
    const regTwo = /[0-9]/
    const regThree = /[0-5]/

    if (time.length === 4) {
        for (let i = 0; i < time.length; i++) {
            if ((i === 0 || i === 3) && !regTwo.test(time[i])) {
                return false
            } else if (i === 2 && !regThree.test(time[i])) {
                return false
            } else if (i === 1 && time[i] !== ':') {
                return false
            }
        }
    } else if (time.length === 5) {
        for (let i = 0; i < time.length; i++) {
            if (i === 0 && !regOne.test(time[i])) {
                return false
            } else if (i === 1 && time[0] === '2' && parseInt(time[1]) > 3) {
                return false
            } else if ((i === 1 || i === 4) && !regTwo.test(time[i])) {
                return false
            } else if (i === 3 && !regThree.test(time[i])) {
                return false
            } else if (i === 2 && time[i] !== ':') {
                return false
            }
        }
    } else {
        return false
    }

    return true
}