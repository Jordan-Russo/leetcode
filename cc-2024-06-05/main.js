// url: https://leetcode.com/problems/permutation-difference-between-two-strings/description/
// You are given two strings s and t such that every character occurs at most once in s and t is a permutation of s.

// The permutation difference between s and t is defined as the sum of the absolute difference between the index of the occurrence of each character in s and the index of the occurrence of the same character in t.

// Return the permutation difference between s and t.

 

// Example 1:

// Input: s = "abc", t = "bac"

// Output: 2

// Explanation:

// For s = "abc" and t = "bac", the permutation difference of s and t is equal to the sum of:

//     The absolute difference between the index of the occurrence of "a" in s and the index of the occurrence of "a" in t.
//     The absolute difference between the index of the occurrence of "b" in s and the index of the occurrence of "b" in t.
//     The absolute difference between the index of the occurrence of "c" in s and the index of the occurrence of "c" in t.

// That is, the permutation difference between s and t is equal to |0 - 1| + |2 - 2| + |1 - 0| = 2.

// Example 2:

// Input: s = "abcde", t = "edbac"

// Output: 12

// Explanation: The permutation difference between s and t is equal to |0 - 3| + |1 - 2| + |2 - 4| + |3 - 1| + |4 - 0| = 12.

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function findPermutationDifference(s, t) {
  let cache = {}
  for(let i = 0; i < s.length; i++){
      cache[s[i]] = i
  }
  let difference = 0
  for(let i = 0; i < t.length; i++){
      difference += Math.abs(i - cache[t[i]]) 
  }
  return difference
};