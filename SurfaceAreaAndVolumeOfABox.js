// Write a function that returns the total surface area and volume of a box.

// The given input will be three positive non-zero integers: width, height, and depth.

function getSize(width, height, depth) {
    const result = []
    result.push(2 * depth * width + 2 * height * depth + 2 * width * height)
    result.push(width * height * depth)
    return result
}