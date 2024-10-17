// url: https://leetcode.com/problems/word-break/submissions/1402408749/
// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.

// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const cache = new Array(s.length + 1).fill(false);
    cache[s.length] = true;
    for(let i = s.length - 1; i >= 0; i--){
        // if there's a word that satisfied the conditional and how many characters was it
        const options = matches(s.slice(i))
        if(options.length > 0){
            for(const option of options){
                if(cache[i + option.length]){
                    cache[i] = true;
                    break;
                }
            }
        }
    }
    function matches(string){
        return wordDict.filter(word => string.startsWith(word));
    }

    return cache[0]
};