/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumRightShifts = function(nums) {
    let descendingCount = 0;
    let descendingIndex;
    if(nums.at(-1) > nums.at(0)){descendingCount++}
    // the wrap around
    for(let i = 0; i < nums.length - 1; i++){
        // compare current and next element
        // if next element is < current increment count
        if(nums[i + 1] < nums[i]){
            descendingCount++;
            descendingIndex = i;
        }
        if(descendingCount > 1){return -1}
    }
    descendingIndex ??= nums.length - 1;
    return nums.length - 1 - descendingIndex
};