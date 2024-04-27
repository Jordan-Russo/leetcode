// url: https://leetcode.com/problems/beautiful-arrangement/description/
// Suppose you have n integers labeled 1 through n. A permutation of those n integers perm (1-indexed) is considered a beautiful arrangement if for every i (1 <= i <= n), either of the following is true:

//     perm[i] is divisible by i.
//     i is divisible by perm[i].

// Given an integer n, return the number of the beautiful arrangements that you can construct.

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: 
// The first beautiful arrangement is [1,2]:
//     - perm[1] = 1 is divisible by i = 1
//     - perm[2] = 2 is divisible by i = 2
// The second beautiful arrangement is [2,1]:
//     - perm[1] = 2 is divisible by i = 1
//     - i = 2 is divisible by perm[2] = 1

// Example 2:

// Input: n = 1
// Output: 1

/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
    // have a count
    // generate all permutations
    // count
    // return
    // recursively add elements to an array
        // if each new term meets criteria then put all possible options for it
        // if not cut it short
let count = 0
    const numbers = Array(n).fill(0).map((_, i) => i + 1)
    function arrangement(remainingElements, current = []){
        if(remainingElements.length === 0){
                count++
        }
        for(let i = 0; i < remainingElements.length; i++){
            if(isBeautiful(remainingElements[i], current.length)){
                const newRemainingElements = remainingElements.filter((v, index) => index !== i)
                arrangement(newRemainingElements, current.concat(remainingElements[i]))                
            }

        }
    }
    arrangement(numbers)
    return count
    function isBeautiful(num, index){
        return num % (index + 1) === 0 || (index + 1) % num === 0
    }
};