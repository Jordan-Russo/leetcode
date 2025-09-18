/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    if(nums.length <= 1){return true}
    // compare the first and last values
    const direction = Math.sign(nums[nums.length - 1] - nums[0]);
    // if the diff is non-negative or not changes the sign
    // loop through the values
    for(let i = 1; i < nums.length; i++){
        // if the trend ends return false
        const prev = nums[i - 1];
        const curr = nums[i];
        const absDiff = Math.abs(curr - prev)
        if(absDiff > 0){
            if(direction !== Math.sign(curr - prev)){
                return false;
            }
        }
    }
    // return true
    return true;
};