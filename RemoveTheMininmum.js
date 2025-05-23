// The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
    let min = numbers[numbers.length - 1]
    for (let i = numbers.length - 1; i >= 0; i--) {
        min = Math.min(min, numbers[i])
    }
    let minArr = []
    let result = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === min && minArr.length === 0) {
            minArr.push(numbers[i])
        } else {
            result.push(numbers[i])
        }
    }
    return result
}