/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function(nums, k) {
    if(k === 1){return true}
    // loop from 0 to nums.length - 2 * k - 1
    for(let i = 0; i < nums.length - 2 * k + 1; i++){
        // test if the subarray starting at the beginning of the range of length k is increasing strictly
        let isStrictlyIncreasing = true;
        for(let j = i + 1; j < i + k; j++){
            const prev = nums[j - 1];
            const curr = nums[j];
            if(curr <= prev){
                isStrictlyIncreasing = false;
                break;
            }
        }
        let isAdjacentStrictlyIncreasing = false;
        if(isStrictlyIncreasing){
            isAdjacentStrictlyIncreasing = true;
            for(let l = i + k + 1; l < i + 2 * k; l++){
                const prev = nums[l - 1];
                const curr = nums[l];
                if(curr <= prev){
                    isAdjacentStrictlyIncreasing = false;
                    break;
                }
            }
        }
        if(isAdjacentStrictlyIncreasing){
            return true;
        }
            // if so test the adjacent range that follows for the same thing
                // if they both are strictly increasing subarrays, return true
    }
    return false;
    // return false
};