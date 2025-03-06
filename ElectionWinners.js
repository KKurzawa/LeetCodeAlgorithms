// Elections are in progress!

// Given an array of numbers representing votes given to each of the candidates, and an integer which is equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.

// The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.

// Note: big arrays will be tested.

function electionsWinners(votes, k) {
    let count = 0
    votes.sort((a, b) => b - a)
    for (let i = 0; i < votes.length; i++) {
        if (k === 0 && votes[0] > votes[1]) {
            count++
            break
        } else if (votes[i] + k > votes[0]) {
            count++
        }
    }
    return count
}