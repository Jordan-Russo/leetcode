// url: https://leetcode.com/problems/find-the-duplicate-number/

// Given an array of integers
// with n + 1 integers
// all integers within the range of [1, n]
// and only one repeated number, return the repeated number

// Cannot use more than constant space
// Cannot modify the array

// naive approach:
    // find and return the duplicate by looping through each number
    // for each number
        // if the first index that has the number isn't the same as the last index that has the number
            // return the number

// Floyd's algorithm approach (cyclic detection) O(n):
// start with 2 pointers at the start (index 0), one fast, one slow
// loop until they intersect
    // move the fast pointer twice
    // move the slow pointer once
// move a second slow pointer to the start
    // loop until both slow pointers intersect
// return the value of the slow pointer


/**
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicate(nums){
    return nums.find(num => nums.indexOf(num) !== nums.lastIndexOf(num))
}

function findDuplicate(nums){
    let slow = nums[0]
    let fast = nums[0]
    do{
        slow = nums[slow]
        fast = nums[nums[fast]]
    }while(slow !== fast)
    let start = nums[0]
    while(start !== slow){
        start = nums[start]
        slow = nums[slow]
    }
    return start
}