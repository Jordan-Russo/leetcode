/**
 * @param {number[]} nums
 * @return {number}
 */
// multiply two largest numbers
// multiply two smallest numbers
// subtract product of smaller numbers from product of larger numbers

// Naive method:
// sort the array first
// grab the first and last two elements and return the product difference

// More specialized approach:
// have pointers to 4 distinct indicies
// loop through (either 4 times grabbing each unique pointer or all at once /w rules)
// take the values at the 4 indicies and return the product difference

// helper function that takes 'minmum' or 'maximum' array and index (default -1) as an argument
// skips any element with index that matches its parameter
// loops and returns either the minimum or maximum element's index

// set datastructure to hold onto the chosen indicies to prevent collisions in what index is chosen
var maxProductDifference = function(nums) {
    const usedIndexes = new Set()
    let max = lookup()
    let secondMax = lookup()
    let min = lookup(false)
    let secondMin = lookup(false)
    return (max * secondMax) - (min * secondMin)
    function lookup(isMax = true){
        // check isMax
        // have the index here
        let index = -1
        for(let i = 0; i < nums.length; i++){
            const curr = nums[i]
            if(usedIndexes.has(i)){
                continue;
            }
            if(index === -1){
                index = i
            }else if(isMax && curr > nums[index] || !isMax && curr < nums[index]){
                index = i
            }
        }
        usedIndexes.add(index)
        return nums[index]
    }
};