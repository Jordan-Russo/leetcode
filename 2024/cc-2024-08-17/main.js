// url: https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/
// You are given an integer array deck where deck[i] represents the number written on the ith card.

// Partition the cards into one or more groups such that:

//     Each group has exactly x cards where x > 1, and
//     All the cards in one group have the same integer written on them.

// Return true if such partition is possible, or false otherwise.

 

// Example 1:

// Input: deck = [1,2,3,4,4,3,2,1]
// Output: true
// Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].

// Example 2:

// Input: deck = [1,1,1,2,2,2,3,3]
// Output: false
// Explanation: No possible partition.

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    // make a frequency cache
    // from the frequencies determine the LCM of all of them
    // if it is greater or equal to 2 return true
    // otherwise return false
    const cache = {}
    for(const card in deck){
        cache[deck[card]] ??= 0
        cache[deck[card]]++
    }
    const values = Object.values(cache)

    // GCF is between 1 and minimum value
    const maximumPossibleFactor = Math.min(...values)
    let GCF = 1
    for(let i = 2; i <= maximumPossibleFactor; i++){
        const isAllFactors = values.every(val => val % i === 0)
        if(isAllFactors){GCF = i}
    }
    return GCF !== 1
};