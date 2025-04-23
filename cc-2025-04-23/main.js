// url: https://leetcode.com/problems/rabbits-in-forest/?envType=daily-question&envId=2025-04-20
// There is a forest with an unknown number of rabbits. We asked n rabbits "How many rabbits have the same color as you?" and collected the answers in an integer array answers where answers[i] is the answer of the ith rabbit.

// Given the array answers, return the minimum number of rabbits that could be in the forest.
/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    // create frequency cache
    const cache = new Map();
    // initialize sum at 0
    let sum = 0;
    // loop through keys
    for(const answer of answers){
        cache.set(answer, cache.get(answer) + 1 || 1);
    }
    for(const [key, freq] of cache){
        // compare key to freq
        const count = Math.ceil(freq / (key + 1));
        // add minimum possible color count to sum
        sum += count * (key + 1);
    }
    // return sum
    return sum;
};
// Example 1:

// Input: answers = [1,1,2]
// Output: 5
// Explanation:
// The two rabbits that answered "1" could both be the same color, say red.
// The rabbit that answered "2" can't be red or the answers would be inconsistent.
// Say the rabbit that answered "2" was blue.
// Then there should be 2 other blue rabbits in the forest that didn't answer into the array.
// The smallest possible number of rabbits in the forest is therefore 5: 3 that answered plus 2 that didn't.

// Example 2:

// Input: answers = [10,10,10]
// Output: 11