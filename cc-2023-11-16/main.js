// url: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

// Given a sorted but rotated array, nums, where every element is unique

// Return the minimum element within the array


console.log(findMin([3,4,5,1,2]), 1)
console.log(findMin([4,5,6,7,0,1,2]), 0)
console.log(findMin([11,13,15,17]), 11)


// have a left and right
// calculate middle
// if middle val is less than right value
// search to the right
// otherwise search to the left

/**
 * @param {number[]} nums
 * @return {number}
 */


function findMin(nums){
    let smallest = Infinity
    let left = 0
    let right = nums.length - 1
    let middle
    while(left < right){
        middle = Math.floor((left + right) / 2)
        if(nums[middle] >= nums[left]){
            smallest = Math.min(nums[left], smallest)
            left = middle + 1
        }else(
            right = middle
        )
    }
    return Math.min(smallest, nums[right])
}