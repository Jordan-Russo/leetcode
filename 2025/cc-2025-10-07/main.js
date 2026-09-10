/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    // do a descending sort of the nums
    nums = nums.toSorted((a,b) => b - a);
    // loop through the sorted nums with a window size of 3
    for(let i = 0; i < nums.length - 2; i++){
        // compare whether or not the elements at positions i + 1 and i + 2 have a sum that is greater then at the position i
            // if so return the perimiter (sum of all 3 elements)
        const isValid = nums[i + 2] + nums[i + 1] > nums[i];
        if(isValid){return nums[i] + nums[i + 1] + nums[i + 2]}
    }
    return 0;
};