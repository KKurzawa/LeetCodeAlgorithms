// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

function switcher(x) {
    let str = ''
    for (let i = 0; i < x.length; i++) {
        if (x[i] === '26') {
            str = str + 'a'
        } else if (x[i] === '25') {
            str = str + 'b'
        } else if (x[i] === '24') {
            str = str + 'c'
        } else if (x[i] === '23') {
            str = str + 'd'
        } else if (x[i] === '22') {
            str = str + 'e'
        } else if (x[i] === '21') {
            str = str + 'f'
        } else if (x[i] === '20') {
            str = str + 'g'
        } else if (x[i] === '19') {
            str = str + 'h'
        } else if (x[i] === '18') {
            str = str + 'i'
        } else if (x[i] === '17') {
            str = str + 'j'
        } else if (x[i] === '16') {
            str = str + 'k'
        } else if (x[i] === '15') {
            str = str + 'l'
        } else if (x[i] === '14') {
            str = str + 'm'
        } else if (x[i] === '13') {
            str = str + 'n'
        } else if (x[i] === '12') {
            str = str + 'o'
        } else if (x[i] === '11') {
            str = str + 'p'
        } else if (x[i] === '10') {
            str = str + 'q'
        } else if (x[i] === '9') {
            str = str + 'r'
        } else if (x[i] === '8') {
            str = str + 's'
        } else if (x[i] === '7') {
            str = str + 't'
        } else if (x[i] === '6') {
            str = str + 'u'
        } else if (x[i] === '5') {
            str = str + 'v'
        } else if (x[i] === '4') {
            str = str + 'w'
        } else if (x[i] === '3') {
            str = str + 'x'
        } else if (x[i] === '2') {
            str = str + 'y'
        } else if (x[i] === '1') {
            str = str + 'z'
        } else if (x[i] === '27') {
            str = str + '!'
        } else if (x[i] === '28') {
            str = str + '?'
        } else if (x[i] === '29') {
            str = str + ' '
        }
    }
    return str
}