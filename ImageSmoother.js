// 661. Image Smoother
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// An image smoother is a filter of the size 3 x 3 that can be applied to each cell of an image by rounding down the average of the cell and the eight surrounding cells (i.e., the average of the nine cells in the blue smoother). If one or more of the surrounding cells of a cell is not present, we do not consider it in the average (i.e., the average of the four cells in the red smoother).


// Given an m x n integer matrix img representing the grayscale of an image, return the image after applying the smoother on each cell of it.



// Example 1:


// Input: img = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[0,0,0],[0,0,0],[0,0,0]]
// Explanation:
// For the points (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
// For the points (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
// For the point (1,1): floor(8/9) = floor(0.88888889) = 0
// Example 2:


// Input: img = [[100,200,100],[200,50,200],[100,200,100]]
// Output: [[137,141,137],[141,138,141],[137,141,137]]
// Explanation:
// For the points (0,0), (0,2), (2,0), (2,2): floor((100+200+200+50)/4) = floor(137.5) = 137
// For the points (0,1), (1,0), (1,2), (2,1): floor((200+200+50+200+100+100)/6) = floor(141.666667) = 141
// For the point (1,1): floor((50+200+200+200+200+100+100+100+100)/9) = floor(138.888889) = 138


// Constraints:

// m == img.length
// n == img[i].length
// 1 <= m, n <= 200
// 0 <= img[i][j] <= 255

var imageSmoother = function (img) {
    let result = []

    for (let i = 0; i < img.length; i++) {
        let arr = []

        for (let j = 0; j < img[i].length; j++) {
            let top = 0
            let bottom = 0
            let left = 0
            let right = 0
            let topLeft = 0
            let topRight = 0
            let bottomLeft = 0
            let bottomRight = 0

            let divisor = 1

            if (i - 1 >= 0) {
                top = img[i - 1][j]
                divisor++
            }

            if (i + 1 < img.length) {
                bottom = img[i + 1][j]
                divisor++
            }

            if (j - 1 >= 0) {
                left = img[i][j - 1]
                divisor++
            }

            if (j + 1 < img[i].length) {
                right = img[i][j + 1]
                divisor++
            }

            if (i - 1 >= 0 && j - 1 >= 0) {
                topLeft = img[i - 1][j - 1]
                divisor++
            }

            if (i - 1 >= 0 && j + 1 < img[i].length) {
                topRight = img[i - 1][j + 1]
                divisor++
            }

            if (i + 1 < img.length && j - 1 >= 0) {
                bottomLeft = img[i + 1][j - 1]
                divisor++
            }

            if (i + 1 < img.length && j + 1 < img[i].length) {
                bottomRight = img[i + 1][j + 1]
                divisor++
            }

            let sum = img[i][j] + top + bottom + left + right + topLeft + topRight + bottomLeft + bottomRight
            let avg = Math.floor(sum / divisor)

            arr.push(avg)
        }
        result.push(arr)

    }
    return result
};