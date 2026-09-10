// url: https://leetcode.com/problems/jewels-and-stones/description/
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  const knownJewels = new Set(jewels)
  let count = 0
  for(let stone = 0; stone < stones.length; stone++){
      if(knownJewels.has(stones[stone])){
          count++
      }
  }
  return count
};