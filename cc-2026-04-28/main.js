/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findValidElements = function(nums) {
    // loop through an array twice
    const left = [];
    let max = 0
    for(let i = 0; i < nums.length; i++){
        max = Math.max(max, nums[i]);
        left.push(max);
    }
    max = 0;
    const right = [];
    for(let i = nums.length - 1; i >= 0; i--){
        max = Math.max(max, nums[i]);
        right.push(max);
    }
    const result = [];
    for(let i = 0; i < nums.length; i++){
        let isValid = false;
        if(i === 0 || i === nums.length - 1){isValid = true}
        if(nums[i] > left[i - 1] || nums[i] > right[nums.length - 2 - i]){isValid = true}
        if(isValid){result.push(nums[i])}
    }
    return result;
    // make two arrays that store the greatest element
        // one going from left to right
        // the other going from right to left
    // loop through nums
        // if any of the following are true push to result:
        // check if last or first element
        // check if value > the left in the l-to-r array
        // check if the value > the right in the r-to-l array        
    // return the resulting filtered array
};