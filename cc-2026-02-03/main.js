/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
    const result = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            result.push(0);
            continue;
        }
        let pos = i;
        pos += nums[i];
        pos = ((pos % nums.length) + nums.length) % nums.length;
        result.push(nums[pos]);
    }
    return result;
};