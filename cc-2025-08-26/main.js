/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let longest = 1;
    let prev = nums[0];
    let score = 1
    for(let i = 1; i < nums.length; i++){
        const curr = nums[i];
        if(curr > prev){
            if(score <= 1){score = 1}
            score++;
        }else if(curr < prev){
            if(score >= 1){score = -1}
            score--;
        }else{
            score = 1;
        }
        prev = curr;
        longest = Math.max(longest, Math.abs(score));
    }
    return longest;
};