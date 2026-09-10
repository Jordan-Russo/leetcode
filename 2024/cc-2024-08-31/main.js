// url: https://leetcode.com/problems/palindrome-partitioning/
// Given a string s, partition s such that every
// substring
// of the partition is a
// palindrome
// . Return all possible palindrome partitioning of s.

 

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]

// Example 2:

// Input: s = "a"
// Output: [["a"]]

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const results = []
    combinations([], 0)
    return results

    function combinations(substrings, index){
        if(index === s.length){
            results.push(substrings)
            return results
        }

        for(let i = 0; i + index < s.length; i++){
            const substring = s.slice(index, index + i + 1)
            if(isPalindrome(substring)){
                combinations([...substrings, substring], index + i + 1)
            }
        }
        return results
    }

    function isPalindrome(string){
        for(let i = 0; i < string.length / 2; i++){
            if(string[i] !== string[string.length - 1 - i]){return false}
        }
        return true
    }
};