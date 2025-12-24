/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function(nums) {
    let rightSum = nums.reduce((acc, c) => acc + c, 0);
    let leftSum = 0;
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        // check the difference between right and left sum
        const difference = Math.abs(rightSum - leftSum);
        // if the current value is 0
        if(nums[i] === 0){
                // if 0
            if(difference === 0){count += 2}
                    // raise count by 2 
                // if -1 or 1
            if(difference === 1){count += 1}
                    // raise count by 1
        }
        // subtract current value from rightSum and add it to leftSum
        leftSum += nums[i];
        rightSum -= nums[i];
    }
    // return the count of valid possible options
    return count;
};