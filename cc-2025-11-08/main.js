/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    // find all the elements with the maximum frequency
    // make a freq cache
    const cache = {};
    let maxFrequency = 0;
    for(const num of nums){
        cache[num] = cache[num] + 1 || 1;
        maxFrequency = Math.max(cache[num], maxFrequency);
    }
    // loop through the nums, filling the freq cache
    // keep track of the maximum frequency
    // make a set
    const degrees = new Set();
    for(const key in cache){
        if(cache[key] === maxFrequency){
            degrees.add(Number(key));
        }
    }
    // loop through the freq cache, adding any number that has the maximum frequency into the set
    // loop through the nums, and record the first and last occurance of each of them
    const degreeRangeCache = {};
    for(let i = 0; i < nums.length; i++){
        const curr = nums[i];
        const isDegree = degrees.has(curr);
        if(isDegree){
            if(!degreeRangeCache[curr]){
            // if undefined, intiialize at [i, i]
                degreeRangeCache[curr] = [i,i];
            }else{
            // if not undefined, reassign degreeRangeCache[1] = i
                degreeRangeCache[curr][1] = i;
            }
        }
    }
    // compare each of these elements by finding their first and last index and then return the smallest range
    let smallestRange = nums.length;
    for(const key in degreeRangeCache){
        const [first, last] = degreeRangeCache[key];
        const diff = last - first + 1;
        smallestRange = Math.min(smallestRange, diff);
    }
    // loop through the differences in those occurances, return the smallest difference
    return smallestRange;
};