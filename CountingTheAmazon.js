// The Arara is an isolated tribe found in the Amazon who count in pairs. For example one to eight is as follows:

// 1 = anane
// 2 = adak
// 3 = adak anane
// 4 = adak adak
// 5 = adak adak anane
// 6 = adak adak adak
// 7 = adak adak adak anane
// 8 = adak adak adak adak
// Take a given number and return the Arara's equivalent.

function countArara(n) {
    const resultArr = []
    if (n % 2 === 0) {
        let num = n / 2
        for (let i = 0; i < num; i++) {
            resultArr.push('adak ')
        }
        console.log(num)
    } else {
        let num = Math.floor(n / 2)
        for (let i = 0; i < num; i++) {
            resultArr.push('adak ')
        }
        resultArr.push('anane')
    }
    let result = resultArr.join('')
    return result.trim()
}