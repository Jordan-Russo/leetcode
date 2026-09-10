// url: https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    // find position of the greatest value that's less than 0 and smallest value greater than 0
    // calculate the amount of elements that are positive and negative
    // return the maximum count of these two

    const positiveCount = nums.length - binaryFindAdjacentTargetIndex(nums, true)
    const negativeCount = binaryFindAdjacentTargetIndex(nums, false)
    return Math.max(positiveCount, negativeCount)
    // isGreater
        // number must be positive
        // previous number must not be positive

        // if all numbers are pos, return 0
        // if every number is not pos, return arr length
    // !isGreater
        // number must be neg
        // number after must not be negative

        // if all numbers are negative, return arr length
        // if every number is not negative return 0

    function binaryFindAdjacentTargetIndex(arr, isGreater){
        // makes two pointers
        let left = 0
        let right = arr.length
        while(left < right){
            const midpoint = Math.trunc((left + right) / 2)
            if(isGreater){
                if(arr[midpoint] > 0 && arr[midpoint - 1] > 0 === false){
                    // if point is positive, and previous point isn't positive
                    // return the point, since it's the first Positive value
                    return midpoint
                }
                if(arr[midpoint] > 0){
                    right = midpoint
                }else{
                    left = midpoint + 1
                }
            }else{
                if(arr[midpoint] < 0 && arr[midpoint + 1] < 0 === false){
                    // if point is negative, and next point isn't negative
                    // return the point after, since it indicates all values to the left are negative
                    return midpoint + 1
                }
                if(arr[midpoint] < 0){
                    left = midpoint + 1
                }else{
                    right = midpoint
                }
            }
        }
        return right
    }
};