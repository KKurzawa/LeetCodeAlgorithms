// Input:
// A 5-day JSON weather forecast which consist of 5 arrays. Each of the 5 arrays includes 8 numbers which represent 3-hourly temperature forecast for a given day.

// Output:
// An array which includes the most frequent number (temperature) from each of the 5 arrays (days). In case there is a tie, return the value present later in a given array (day).

// Example
// For input:

// { "temperature": [
//     [15,17,19,21,21,21,20,16],
//     [16,17,22,22,22,22,20,16],
//     [12,17,19,20,20,20,20,18],
//     [14,15,19,19,20,22,18,17],
//     [15,17,24,24,24,20,20,20]
//   ]
// }
// The ouput should be [21,22,20,19,20]:

// [15,17,19,21,21,21,20,16]: 21 is the most frequent in 1st array
// [16,17,22,22,22,22,20,16]: 22 is the most frequent in 2nd array
// [12,17,19,20,20,20,20,18]: 20 is the most frequent in 3rd array
// [14,15,19,19,20,22,18,17]: 19 is the most frequent in 4th array
// [15,17,24,24,24,20,20,20]: 24 and 20 appear 3 times each in 5th array so 20 is included in the output as the last 20 appears later than the last 24.

function getMostFrequent(json) {
    const obj1 = {}
    let max1 = 0
    let maxKey1 = 0
    let lastIndex1 = 0

    const obj2 = {}
    let max2 = 0
    let maxKey2 = 0
    let lastIndex2 = 0

    const obj3 = {}
    let max3 = 0
    let maxKey3 = 0
    let lastIndex3 = 0

    const obj4 = {}
    let max4 = 0
    let maxKey4 = 0
    let lastIndex4 = 0

    const obj5 = {}
    let max5 = 0
    let maxKey5 = 0
    let lastIndex5 = 0

    const zero = 0
    const one = 1
    const two = 2
    const three = 3
    const four = 4

    const result = []

    function findMax(obj, max, maxKey, lastIndex, index) {
        json.temperature[index].map((num) => {
            num in obj ? obj[num] += 1 : obj[num] = 1
        })

        for (let key in obj) {
            if (obj[key] > max || (obj[key] === max && json.temperature[index].lastIndexOf(Number(key)) > lastIndex)) {
                max = obj[key]
                maxKey = Number(key)
                lastIndex = json.temperature[index].lastIndexOf(Number(key))
            }
        }
        result.push(maxKey)
    }

    findMax(obj1, max1, maxKey1, lastIndex1, zero)
    findMax(obj2, max2, maxKey2, lastIndex2, one)
    findMax(obj3, max3, maxKey3, lastIndex3, two)
    findMax(obj4, max4, maxKey4, lastIndex4, three)
    findMax(obj5, max5, maxKey5, lastIndex5, four)

    return result
}