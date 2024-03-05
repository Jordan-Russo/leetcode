// url: https://leetcode.com/problems/sort-array-by-increasing-frequency/description/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    // build frequency cache
    const cache = {}
    for(const num of nums){
        cache[num] ??= 0
        cache[num]++
    }
    // we'll mutate the array with Array.protoype.sort
    return nums.sort((a,b) => {
        const frequencyA = cache[a]
        const frequencyB = cache[b]
        if(frequencyA === frequencyB){
            return b - a
        }
        return frequencyA - frequencyB
    })
    // build custom sorting function that handles sorting by frequency (asc)
        // then if frequencies are equal handles it by key value (desc)
};