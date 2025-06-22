// Hello dweller,

// I'm the overseer of our vault, in which we all live.

// I make it short: We are out of water. The only question is when!
// Here is a list of all dwellers with their respective age int[] ageOfDweller.
// In our tank currently are int water liters of water.
// I want to know from you: How long will rich our supplies.

// Remember!
// Each dweller has a different water consumption.
// A dweller under 18 consumes 1 liter per day, everyone older than 50 needs 1.5 liters and the rest needs 2 liters per day.
// Each dweller must get its prescribed ration of water, every day!
// If not satisfied all dweller, then our days are numbered.

// Good luck! I'll bet on you!

function thirstyIn(water, ageOfDwellerArray) {
    if (ageOfDwellerArray.length === 0) {
        return -1
    }
    let waterPerDay = 0

    ageOfDwellerArray.map((num) => {
        num < 18 ? waterPerDay = waterPerDay += 1 : num > 50 ? waterPerDay = waterPerDay += 1.5 : waterPerDay = waterPerDay += 2
    })

    return Math.floor(water / waterPerDay)
}