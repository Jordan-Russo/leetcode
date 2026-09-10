/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function(nums) {
    let maxLength = 0;
    let start = 0;
    for(let i = 1; i <= nums.length; i++){
        // check for continous, is the value two places before the current one equal to this one?
            // if so extend chain (don't reassign start) 
            // otherwise do,
                // set maxLength if needed
                // check if current position can start alternating subarray
                    // if so set it up


        if(nums[i] === nums[i - 2] && Math.abs(nums[i] - nums[i - 1]) === 1){
            continue;
        }
        maxLength = Math.max(maxLength, i - start)
        if(nums[i - 1] + 1 === nums[i]){
            start = i - 1;
        }else{start = i}

    }
    if(maxLength < 2){maxLength = -1}
    return maxLength;
};