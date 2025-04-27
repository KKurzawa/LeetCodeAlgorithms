// You work in the best consumer electronics corporation, and your boss wants to find out which three products generate the most revenue. Given 3 lists of the same length like these:

// products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
// amounts: [3, 24, 8]
// prices: [199, 299, 399]
// Return the three product names with the highest revenues (amount * price), in descending order (highest to lowest revenue).

// Note: if multiple products have the same revenue, order them according to their original positions in the input list.

function top3(products, amounts, prices) {
    const arr = []
    const result = []

    amounts.map((num, i) => {
        arr.push({ product: products[i], profit: num * prices[i], index: products.indexOf(products[i]) })
    })

    let profitCheck = arr[0].profit

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].profit !== profitCheck) {
            break
        } else if (i === arr.length - 1) {
            return [products[0], products[1], products[2]]
        }
    }

    arr.sort((a, b) => b.profit - a.profit);

    for (let i = 0; i < 3; i++) {
        result.push(arr[i].product)
    }

    return result
}