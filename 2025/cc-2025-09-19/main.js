/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
// given an array of nums of length n, and two integers k and x
// return the array using nums, k and x, to produce a "x-sum"
    // count the frequency of all the elements in the array
    // keep only the frequency of the top x most freqeuent elements
        // if two values have the same frequency, then prioritize larger values
        // calculate the sum of the resulting array
var findXSum = function(nums, k, x) {
    const result = [];
    const cache = new Map();
    for(let i = 0; i <= k - 1; i++){
        // cache[nums[i]] = cache[nums[i]] + 1 || 1;
        cache.set(nums[i], cache.get(nums[i]) + 1 || 1);
    }
    // build out cache values
    // loop through array n - k + 1 times, adjusting the range with increments
    for(let i = 0; i < nums.length - k + 1; i++){
        // determine the x most frequent elements in the cache
        const sortedValues = [...cache].sort(([keyA, valA],[keyB, valB]) => {
            if(valA === valB){
                return keyB - keyA;
            }else{
                return valB - valA;
            }
        });
        result.push(sortedValues.slice(0, x).reduce((acc, [key, val]) => acc + key * val, 0));
        // remove one element of nums[i] from the cache, add one element of nums[k] to the cache
        cache.set(nums[i], cache.get(nums[i]) - 1);
        cache.set(nums[i + k], cache.get(nums[i + k]) + 1 || 1);
    }
    return result;
};
// console.log(findXSum([1,1,2,2,3,4,2,3], 6, 2), [6,10,12]);
// console.log(findXSum([3,8,7,8,7,5], 2, 2), [11,15,15,15,12]);