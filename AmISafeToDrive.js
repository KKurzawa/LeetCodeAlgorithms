// Drink driving is an issue all around the world!  On average 3,000 people are killed or seriously injured each year in drink drive collisions, nearly one in six of all deaths on the road involve drivers who are over the legal alcohol limit.

// If you've been out drinking you may still be affected by alcohol the next day. You may feel OK, but you may still be unfit to drive or over the legal alcohol limit. It's impossible to get rid of alcohol any faster. A shower, a cup of coffee or other ways of 'sobering up' will not help. It just takes time.

// Description
// Your task is to write a kata that will work out if you are safe to drive! You will be given some alcoholic drinks, a time when you stopped drinking and the time you would like to drive.

// You will need to return the total units (to 2 decimal places) of the alcoholic drinks and a boolean value true if you are able to drive or false if you are still unable to drive.
// Task
// Create a method called drive that takes an array of drinks in the format [[strength, volume]] a time when you finished drinking and a time when you would like to drive.

// eg. drive([[10.0,100]], "20:00", "21:00") and it must return [1.0, false]
// Rules
// 1. On average it takes a person 1 hour for their body to remove 1 unit of alcohol.

// 2. Units of alcohol are calculated by strength (ABV) x volume (ml) / 1000 = units. More information can be found here

// 3. Data passed will be in the format ([[strength,volume]], finished, drive_time). Where finished is the time you stopped drinking and drive_time is the time you would like to drive.

// 4. If the finished >= drive_time then you can assume that it is the next day.

// 5. Times are passed as strings and are in 24 hour format.

// 6. Return total units to 2 decimal places rounded. For example 1.10 => 1.1 and 1.236 => 1.24

// 7. Return true if you are able to drive and false if you are not.

function drive(drinks, finished, drive_time) {
    let bac = 0
    for (let i = 0; i < drinks.length; i++) {
        let drink = drinks[i][0] * drinks[i][1] / 1000
        bac += drink
    }
    const finishedNum = parseFloat(finished.replace(":", "."))
    const drive_timeNum = parseFloat(drive_time.replace(":", "."))
    const time = drive_timeNum - finishedNum
    let resultTime = 0
    if (time < 0) {
        resultTime = 24 - parseFloat(time.toString().slice(1))
    } else {
        resultTime = time
    }
    const resultBac = Math.round(bac * 100) / 100
    return [resultBac, resultTime > bac]
}