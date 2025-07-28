// 605. Can Place Flowers
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.



// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false


// Constraints:

// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length

var canPlaceFlowers = function (flowerbed, n) {
    if (flowerbed.length === 1 && flowerbed[0] === 0) return true

    let zeros = 0
    let plots = n

    if (flowerbed.includes(1) === false) {
        for (let i = 0; i < flowerbed.length; i++) {
            zeros++
        }
        zeros % 2 === 0 ? plots -= zeros / 2 : plots -= (zeros + 1) / 2
        return plots < 1 ? true : false
    }

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 && i === flowerbed.length - 1) {
            zeros++

            if (zeros % 2 === 0) {
                plots -= zeros / 2
            } else {
                plots -= Math.floor(zeros / 2)
            }

        } else if (flowerbed[i] === 0) {
            zeros++

        } else if (flowerbed[i] === 1) {

            if (i - zeros === 0 && zeros % 2 === 0) {
                plots -= zeros / 2
            } else if (zeros % 2 !== 0) {
                plots -= Math.floor(zeros / 2)
            } else if (zeros !== 0 && zeros % 2 === 0) {
                plots -= zeros / 2 - 1
            }

            zeros = 0
        }
    }

    return plots < 1 ? true : false
}
