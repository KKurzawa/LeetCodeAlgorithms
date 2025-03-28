// Finding your seat on a plane is never fun, particularly for a long haul flight... You arrive, realise again just how little leg room you get, and sort of climb into the seat covered in a pile of your own stuff.

// To help confuse matters (although they claim in an effort to do the opposite) many airlines omit the letters 'I' and 'J' from their seat naming system.

// the naming system consists of a number (in this case between 1-60) that denotes the section of the plane where the seat is (1-20 = front, 21-40 = middle, 41-60 = back). This number is followed by a letter, A-K with the exclusions mentioned above.

// Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.

// Given a seat number, your task is to return the seat location in the following format:

// '2B' would return 'Front-Left'.

// If the number is over 60, or the letter is not valid, return 'No Seat!!'.

function planeSeat(a) {
    const number = parseInt(a.substring(0, a.length - 1))
    const letter = a.substring(a.length - 1)
    let resultArr = ['-']
    const left = ['A', 'B', 'C']
    const middle = ['D', 'E', 'F']
    const right = ['G', 'H', 'K']
    if (number < 21) {
        resultArr.unshift("Front")
    } else if (number > 20 && number < 41) {
        resultArr.unshift("Middle")
    } else if (number > 40 && number < 61) {
        resultArr.unshift("Back")
    } else {
        return 'No Seat!!'
    }
    if (left.includes(letter)) {
        resultArr.push("Left")
    } else if (middle.includes(letter)) {
        resultArr.push("Middle")
    } else if (right.includes(letter)) {
        resultArr.push("Right")
    } else {
        return 'No Seat!!'
    }
    return resultArr.join('')
}