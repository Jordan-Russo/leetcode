/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function(nums, threshold) {
    let longest = 0;
    let start = 0;
    let evenParity;
    // sliding window problem
    for(let i = 0; i < nums.length; i++){
        const isOdd = Boolean(nums[i] & 1);
        const isTooLarge = nums[i] > threshold;
        if(i - start === 0){
            if(isTooLarge || isOdd){
                start = i + 1;
                continue;
            }else{
                evenParity = true;
                longest = Math.max(longest, 1);
                continue;
            }
        }else{
            // if it's too large we assign start to i + 1
            if(isTooLarge){
                start = i + 1;
                continue;
            }
            // if instead it's parity is wrong we assign start to i 
            if(isOdd !== evenParity){
                // check if the current value is even and below threshold, is so set it as start
                if(!isOdd && !isTooLarge){
                    start = i;
                }else{
                    start = i + 1;
                }
                // otherwise, set the next value as start instead
                continue;
            }
            if(isTooLarge){
                evenParity = undefined;
                start = i + 1;
                continue;
            }
            longest = Math.max(longest, i - start + 1)
            evenParity = !evenParity;
        }
        // all values must be <= threshold
        // must start on an even value
        // each following value must have opposite parity of the previous value
    }
    // keep track and return the length of the largest subarray that matches these conditions
    return longest;
};