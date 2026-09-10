// url: https://leetcode.com/problems/jump-game/
// given integer array, going to start from the first index and jump a maximum amount of positions that is the element's value. say whether or not it's possible to reach the last index in the array.

// array, intger array, always an array, always numbers, integers, no string numbers, always going to have a length >= 1
// values in the array, are non-negative integers

// return a boolean true || false, as to whether you can reach teh last index jumping from the first through a series of jumps

// [2,3,1,1,4] -> true
// [3,2,1,0,4] -> false


/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
    // create an array of size nums
    const cache = new Array(nums.length);
        // assign the last value in it to true
    cache[cache.length - 1] = true;
    // loop from the second to last position to the first position (inclusive)
    for(let i = cache.length - 2; i >= 0; i--){
        for(let j = 1; j <= nums[i]; j++){
            if(cache[i + j] === true){
                cache[i] = true;
                break;
            }
            // see if it's possible to jump to another true marked value
            // if so mark the current index as true and continue
        }
    }
    // return a boolean on whether or not the first index is true,
    return Boolean(cache[0])
};

function canJump(arr){
    let position = arr.length - 1;
    for(let i = arr.length - 2; i >= 0; i--){
        if(i + arr[i] >= position){position = i}
    }
    return position === 0;
}

console.log(canJump([2,3,1,1,4]), true);
console.log(canJump([3,2,1,0,4]), false);