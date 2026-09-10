// url: https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
// given two arrays of positive integers, each has a length > 0
// return a boolean, t / f, if you can use one array to make the other array with unlimited subarray reversals
function canBeEqual(target, arr){
    // verify that the target and array length are the same
        // the question already verified that
    // loop through the target array
    const freq = {};
    for(const num of target){
        // make a frequency cache of target
        freq[num] = freq[num] + 1 || 1;
    }
    // loop through the given array
    for(const num of arr){
        // verify the frequency cache
            // if there is an error in matching return false
        if(!freq[num]){return false}
        freq[num]--;
    }
    // return true
    return true;
};
// console.log(canBeEqual([1,2,3,4], [2,4,1,3]), true);
// console.log(canBeEqual([7], [7]), true);
// console.log(canBeEqual([3,7,9], [3,7,11]), false);