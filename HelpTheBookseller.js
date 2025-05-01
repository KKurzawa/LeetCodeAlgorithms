// A bookseller has lots of books classified in 26 categories labeled A, B, C, ..., Z. Each book has a code of at least 3 characters. The 1st character of a code is a capital letter which defines the book category.

// In the bookseller's stocklist each code is followed by a space and by a positive integer, which indicates the quantity of books of this code in stock.

// Task
// You will receive the bookseller's stocklist and a list of categories. Your task is to find the total number of books in the bookseller's stocklist, with the category codes in the list of categories. Note: the codes are in the same order in both lists.

// Return the result as a string described in the example below, or as a list of pairs (Haskell/Clojure/Racket/Prolog).

// If any of the input lists is empty, return an empty string, or an empty array/list (Clojure/Racket/Prolog).

// Example
// # the bookseller's stocklist:
// "ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"

// # list of categories: 
// "A", "B", "C", "W"

// # result:
// "(A : 20) - (B : 114) - (C : 50) - (W : 0)"

function stockList(books, categories) {
    const obj = {}
    categories.map((letter) => {
        obj[letter] = 0
    })
    books.map((book) => {
        if (categories.includes(book[0])) {
            const bookArr = book.split(' ')
            obj[book[0]] += parseInt(bookArr[1])
        }
    })
    let valueArr = Object.values(obj)
    let count = 0
    valueArr.map((num) => {
        count += num
    })
    let result = ''
    for (const key in obj) {
        result = result + '(' + key + ' : ' + obj[key] + ')' + ' - '
    }
    return count === 0 ? '' : result.slice(0, result.length - 3)
}