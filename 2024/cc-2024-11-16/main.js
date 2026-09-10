// url: https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/description/
/**
 * @param {number[]} nums
 * @return {number}
 */

// Given an integer array

// Repalce each element in that array with the sum of its digits

// return the minimum element in nums after all replacements

function minElement(nums){
    let min = Infinity
    for(let num of nums){
        let digitSum = 0
        while(num !== 0){
            const digit = num % 10
            digitSum += digit
            num = Math.trunc(num / 10)
        }
        min = Math.min(min, digitSum)
    }
    return min
}

console.log(minElement([10,12,13,14]), 1)
console.log(minElement([1,2,3,4]), 1)
console.log(minElement([999, 19, 199]), 10)