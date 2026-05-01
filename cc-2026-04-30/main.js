/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function(nums, k) {
    // if k is 1, return largest value
    if(k === nums.length){return Math.max(...nums)}
    if(k === 1){
        const cache = new Map();
        for(const num of nums){
            cache.set(num, cache.get(num) + 1 || 1);
        }
        let max = -1;
        for(const [value, freq] of cache){
            if(freq === 1){
                max = Math.max(max, value);
            }
        }
        return max;
    }
    const isFirstUnique = nums.indexOf(nums[0]) === nums.lastIndexOf(nums[0]);
    const isLastUnique = nums.indexOf(nums[nums.length - 1]) === nums.lastIndexOf(nums[nums.length - 1]);
    if(isFirstUnique && isLastUnique){
        return Math.max(nums[0], nums[nums.length - 1]);
    }else if(isFirstUnique || isLastUnique){
        return isFirstUnique === true ? nums[0] : nums[nums.length - 1];
    }else{
        return -1;
    }
    // if k is > 1, return largest value between the first and last element of the array if they are unique
        // if one of those values is unique but the other isn't use the one that is unique
        // if neither of them are unique return -1
    
    // if k is === to nums.length
        // make a cache
};