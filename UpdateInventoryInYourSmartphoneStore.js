// You will be given an array which lists the current inventory of stock in your store and another array which lists the new inventory being delivered to your store today.

// Your task is to write a function that returns the updated list of your current inventory in alphabetical order.

function updateInventory(curStock, newStock) {
    for (let i = 0; i < curStock.length; i++) {
        let first = curStock[i][0]
        let last = curStock[i].shift()
        curStock[i].push(last)
    }
    const curObj = Object.fromEntries(curStock)

    for (let i = 0; i < newStock.length; i++) {
        let first = newStock[i][0]
        let last = newStock[i].shift()
        newStock[i].push(last)
    }
    const newObj = Object.fromEntries(newStock)

    for (const key in newObj) {
        if (key in curObj) {
            curObj[key] = curObj[key] + newObj[key]
        } else {
            curObj[key] = newObj[key]
        }
    }
    const resultArr = Object.entries(curObj).sort()

    for (let i = 0; i < resultArr.length; i++) {
        let first = resultArr[i][0]
        let last = resultArr[i].shift()
        resultArr[i].push(last)
    }

    return resultArr.sort((a, b) => {
        return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0
    })
}