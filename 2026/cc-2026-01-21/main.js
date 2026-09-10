/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
// given an integer arr, nums
    // have a length >= 1
// given a target integer, that will always exist within the arr at least once
// given a start integer, that represents the index that distance is measured from
// return the shortest possible distance from start to an index that has the target element
var getMinDistance = function(nums, target, start) {
    // initialize min distance as nums length
    let minDistance = nums.length;
    // loop through the nums array, i as index
    for(let i = 0; i < nums.length; i++){
        // check if element is eequal to target
        // yes then,
        if(target === nums[i]){
            // calculate abs(i - start)
            // if the calculated distance is smaller then the current min distance replace it
            minDistance = Math.min(minDistance, Math.abs(i - start));
        }
    }
    // return the min distance
    return minDistance;
};
// console.log(getMinDistance([1,2,3,4,5], 5, 3), 1);
// console.log(getMinDistance([1], 1, 0), 0);
// console.log(getMinDistance([1,1,1,1,1,1,1,1,1,1], 1, 0), 0);