/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndices = function(nums) {
    // initialize a count at 0
    let count = 0;
    // get a total sum of all elements
    let total = nums.reduce((acc, c) => acc + c, 0);
    // loop through nums (excluding last element)
    for(let i = 0; i < nums.length - 1; i++){
        // assign total the remainder after subtracting current element value
        total -= nums[i];
        // divide total by element count to the right of the current element
        const avg = total / (nums.length - 1 - i);
        // with the calculated average if it's < the current element, increment count
        if(nums[i] > avg){count++}
    }
    // return count
    return count;
};