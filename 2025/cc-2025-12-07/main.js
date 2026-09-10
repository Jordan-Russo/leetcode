/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    // create a set to hold the numbers
    const seen = new Set(nums);
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    // loop through the values between min and max of the set
    const list = []
    for(let i = min + 1; i < max; i++){
        // if the value is not in the set add it to the list array, in order
        if(!seen.has(i)){
            list.push(i);
        }
    }
    // return the list array
    return list;
};