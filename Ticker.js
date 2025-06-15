// While using public transport we could see simple displays with a ticker. It often provides information about next stations and expected arrival time.

// Let's implement a function which will return a chunk of text to be displayed on a display of fixed width. The function should take text to display, width of the display and tick as a step of the ticker. The function will be called many times with tick parameter constantly incrementing.

// At very beginning the display is empty. At first step only one character should be displayed in the most right position and so on. When the message is displayed, it should be dissapear char by char to left position and return to blank state of the display. After that cycle should start again.

// For example

// ticker('Hello world!', 10, 4)   // '      Hell'
// We could expect that our function will be called from simple script like this one

// const demo = (text, width) => {
//   let tick = 0;
//   setInterval(_ => {
//     someDisplayFunction(ticker(text, width, tick));
//     tick++ 
//   }, 100);
// }

function ticker(text, width, tick) {
    let newTick = tick
    const arr = []
    let firstSub = ''

    while (newTick > text.length + width) {
        newTick = newTick - text.length - width
    }

    newTick > text.length ? firstSub = text + ' '.repeat(newTick - text.length) : firstSub = text.substring(0, newTick)

    function longTick() {
        const reverseArr = firstSub.split('').reverse()
        for (let i = 0; i < width; i++) {
            arr.unshift(reverseArr[i])
        }
    }

    firstSub.length < width ? arr.push(' '.repeat(width - firstSub.length) + firstSub) :
        firstSub.length === width ? arr.push(firstSub) :
            longTick()

    return arr.join('')
}