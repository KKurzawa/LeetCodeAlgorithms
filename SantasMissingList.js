// Santa has misplaced his list of gift to all the children, he has however a condensed version lying around.

// In this condensed verison, instead of a list of gifts for each child, each one has an integer.

// He also have a list of gifts corresponding to each integer. His list is as follows:

// GIFTS = {
//     1 => 'Toy Soldier',
//     2 => 'Wooden Train',
//     4 => 'Hoop',
//     8 => 'Chess Board',
//    16 => 'Horse',
//    32 => 'Teddy',
//    64 => 'Lego',
//   128 => 'Football',
//   256 => 'Doll',
//   512 => "Rubik's Cube"
// }
// This list is made available to you, as GIFTS.

// The integer for each child is such that the child should get the highest toy lower than or equal to that integer, and then, if there's more left, also get the highest toy lower than the rest and so on. Know that Santa never gives the same gift twice.

// For example, by Timmy's name is 160. This means that Timmy should get both a football and a teddy, because 128 + 32 = 160.

// You should help Santa by decoding his own list and recreate the missing list for him. Santa's elf wants the list sorted alphabetically by the toys, so you should help them as well and list the toys in a sorted order.

function gifts(number) {
    const gifts = [
        {
            num: 1,
            name: 'Toy Soldier'
        },
        {
            num: 2,
            name: 'Wooden Train'
        },
        {
            num: 4,
            name: 'Hoop'
        },
        {
            num: 8,
            name: 'Chess Board'
        },
        {
            num: 16,
            name: 'Horse'
        },
        {
            num: 32,
            name: 'Teddy'
        },
        {
            num: 64,
            name: 'Lego'
        },
        {
            num: 128,
            name: 'Football'
        },
        {
            num: 256,
            name: 'Doll'
        },
        {
            num: 512,
            name: "Rubik's Cube"
        }
    ]

    let count = number
    const result = []

    while (count > 512) {
        count -= gifts[gifts.length - 1].num
        result.push(gifts[gifts.length - 1].name)
    }

    function getToys() {
        for (let i = 0; i < gifts.length; i++) {
            if (gifts[i].num > count) {
                count -= gifts[i - 1].num
                result.push(gifts[i - 1].name)
                break
            }
        }
    }

    while (count > 0) {
        getToys()
    }

    return result.sort()
}