// url: https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k. 

// Given an array of numbers, pos ints
// Given k, pos int

// Return the number of unique pairs of indexes that have equal values at their positions and whose produce of indexes number is divisible by k

function countPairs(numbers, k){
  let count = 0
  for(let i = 0; i < numbers.length; i++){
    for(let j = i + 1; j < numbers.length; j++){ 
        if(numbers[i] === numbers[j] && (i * j) % k === 0){count++}
    }
  }
  return count
}

console.log(countPairs([3,1,2,2,2,1,3], 2), 4)
console.log(countPairs([1,2,3,4], 1), 0)