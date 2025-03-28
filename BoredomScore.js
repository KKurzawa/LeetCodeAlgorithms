// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

function boredom(staff) {
    const arr = Object.values(staff)
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        arr[i] === 'accounts' ? count = count + 1 :
            arr[i] === 'finance' ? count = count + 2 :
                arr[i] === 'canteen' ? count = count + 10 :
                    arr[i] === 'regulation' ? count = count + 3 :
                        arr[i] === 'trading' ? count = count + 6 :
                            arr[i] === 'change' ? count = count + 6 :
                                arr[i] === 'IS' ? count = count + 8 :
                                    arr[i] === 'retail' ? count = count + 5 :
                                        arr[i] === 'cleaning' ? count = count + 4 :
                                            count = count + 25
    }
    if (count <= 80) {
        return 'kill me now'
    } else if (count > 80 && count < 100) {
        return 'i can handle this'
    } else {
        return 'party time!!'
    }
    return count
}