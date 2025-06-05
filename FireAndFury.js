// Description:
// The President's phone is broken
// He is not very happy.

// The only letters still working are uppercase E, F, I, R, U, Y.

// An angry tweet is sent to the department responsible for presidential phone maintenance.

// Kata Task
// Decipher the tweet by looking for words with known meanings.

// FIRE = "You are fired!"
// FURY = "I am furious."
// If no known words are found, or unexpected letters are encountered, then it must be a "Fake tweet."

// Notes
// The tweet reads left-to-right.
// Any letters not spelling words FIRE or FURY are just ignored
// If multiple of the same words are found in a row then plural rules apply -
// FIRE x 1 = "You are fired!"
// FIRE x 2 = "You and you are fired!"
// FIRE x 3 = "You and you and you are fired!"
// etc...
// FURY x 1 = "I am furious."
// FURY x 2 = "I am really furious."
// FURY x 3 = "I am really really furious."
// etc...
// Examples
// ex1. FURYYYFIREYYFIRE = "I am furious. You and you are fired!"
// ex2. FIREYYFURYYFURYYFURRYFIRE = "You are fired! I am really furious. You are fired!"
// ex3. FYRYFIRUFIRUFURE = "Fake tweet."

var fireAndFury = function (tweet) {
    console.log(tweet)
    const arr = []
    const arr2 = []
    const letters = ['F', 'I', 'R', 'E', 'U', 'Y']

    for (let i = 0; i < tweet.length; i++) {
        if (!letters.includes(tweet[i])) {
            return 'Fake tweet.'
        }
        if (tweet.slice(i, i + 4) === 'FIRE') {
            arr.push('FIRE')
        } else if (tweet.slice(i, i + 4) === 'FURY') {
            arr.push('FURY')
        }
    }

    let objIndex = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'FURY' && (i === 0 || arr[i - 1] !== 'FURY')) {
            arr2.push({ name: 'FURY', count: 1 })
            objIndex++
        } else if (arr[i] === 'FURY' && arr[i - 1] === 'FURY') {
            arr2[objIndex - 1].count += 1
        }
        if (arr[i] === 'FIRE' && (i === 0 || arr[i - 1] !== 'FIRE')) {
            arr2.push({ name: 'FIRE', count: 1 })
            objIndex++
        } else if (arr[i] === 'FIRE') {
            arr2[objIndex - 1].count += 1
        }

    }

    let result = ''

    arr2.map((obj) => {
        if (obj.name === 'FIRE' && obj.count === 1) {
            result = result + 'You are fired! '
        } else if (obj.name === 'FIRE' && obj.count !== 1) {
            result = result + `You ${'and you '.repeat(obj.count - 1)}are fired! `
        }
        if (obj.name === 'FURY' && obj.count === 1) {
            result = result + 'I am furious. '
        } else if (obj.name === 'FURY' && obj.count !== 1) {
            result = result + `I am ${'really '.repeat(obj.count - 1)}furious. `
        }

    })

    return result.length === 0 ? "Fake tweet." : result.trim()
}