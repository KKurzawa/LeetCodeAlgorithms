// Description:
// You are playing a simple slot machine that only contains exclamation marks and question marks. Every time the slot machine is started, a string of 5 length is obtained. If you're lucky enough to get a Special permutation, you'll win the bonus. Give you a string s, return the highest bonus.

// Bouns list:

// Five-of-a-Kind:   ---- 1000
// "!!!!!" or "?????"

// Four-of-a-Kind:    ---- 800
// The string contains a "!!!!" or "????"
// "!!!!?","?!!!!","????!","!????"

// Full House:         ----500
// such as "!!!??" or "???!!"...

// Three-of-a-Kind:    ---- 300
// The string contains a "!!!" or "???"
// such as "!!!?!","!???!"...

// Two pair:           ---- 200
// The string contains two "!!" or "??"
// such as "??!!?","!!?!!"

// A Pair:             ---- 100
// The string contains a "!!" or "??"
// such as "?!??!","!!?!?"

// Others              ---- 0
// such as "?!?!?","!?!?!"
// Examples
// slot("!!!!!") === 1000
// slot("!!!!?") === 800
// slot("!!!??") === 500
// slot("!!!?!") === 300
// slot("!!?!!") === 200
// slot("!!?!?") === 100
// slot("!?!?!") === 0

function slot(s) {
    const obj = {}
    let id = 1

    for (let i = 0; i < s.length; i++) {
        if (i === 0) {
            obj[id] = 1
        } else if (s[i] === s[i - 1]) {
            obj[id] = obj[id] + 1
        } else {
            id++
            obj[id] = 1
        }
    }

    const arr = Object.values(obj)

    return obj[1] === 5 ? 1000
        : obj[1] === 4 || obj[2] === 4 ? 800
            : (obj[1] === 2 && obj[2] === 3) || (obj[1] === 3 && obj[2] === 2) ? 500
                : arr.includes(3) && arr.length === 3 ? 300
                    : arr.includes(2) && arr.length === 3 ? 200
                        : arr.includes(2) && arr.length === 4 ? 100
                            : 0
}