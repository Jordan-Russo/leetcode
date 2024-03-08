// url: https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let start = 0
    for(let i = 0; i < nums.length - 1; i++){
        const curr = nums[i]
        const next = nums[i + 1]
        if(next < curr){
            start = i + 1
            break;
        }
    }
    // find minimum index

    // check if every value after and before it are increasing
        // if not return false
    let position = start

    do{
        const  curr = nums[position]
        const nextIndex = (position + 1) % nums.length
        const next = nums[nextIndex]
        // check if increasing from curr to next
        if(curr > next && nextIndex !== start){
            return false
        }
            // if not return false
        // increment & modulo position
        position = nextIndex
    }while(position !== start)
    return true   
    // return true
};