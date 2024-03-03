// url: https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/
// Given two strings both of the same length
// Return a boolean on whether or not every character in both strings doesn't have a frequency differernce greater than 3.

// Example 1:

// Input: word1 = "aaaa", word2 = "bccb"
// Output: false
// Explanation: There are 4 'a's in "aaaa" but 0 'a's in "bccb".
// The difference is 4, which is more than the allowed 3.
// Example 2:

// Input: word1 = "abcdeef", word2 = "abaaacc"
// Output: true
// Explanation: The differences between the frequencies of each letter in word1 and word2 are at most 3:
// - 'a' appears 1 time in word1 and 4 times in word2. The difference is 3.
// - 'b' appears 1 time in word1 and 1 time in word2. The difference is 0.
// - 'c' appears 1 time in word1 and 2 times in word2. The difference is 1.
// - 'd' appears 1 time in word1 and 0 times in word2. The difference is 1.
// - 'e' appears 2 times in word1 and 0 times in word2. The difference is 2.
// - 'f' appears 1 time in word1 and 0 times in word2. The difference is 1.
// Example 3:

// Input: word1 = "cccddabba", word2 = "babababab"
// Output: true
// Explanation: The differences between the frequencies of each letter in word1 and word2 are at most 3:
// - 'a' appears 2 times in word1 and 4 times in word2. The difference is 2.
// - 'b' appears 2 times in word1 and 5 times in word2. The difference is 3.
// - 'c' appears 3 times in word1 and 0 times in word2. The difference is 3.
// - 'd' appears 2 times in word1 and 0 times in word2. The difference is 2.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    const seen = new Set(word1.concat(word2))
    // create a set for both
    const cache1 = {}
    const cache2 = {}
    // and a cache of frequency for each
    for(const char of word1){
        cache1[char] ??= 0
        cache1[char]++
    }
    for(const char of word2){
        cache2[char] ??= 0
        cache2[char]++
    }
    for(const char of seen){
        const diff = Math.abs((cache1[char] || 0) - (cache2[char] || 0))
        if(diff > 3){
            return false
        }
    // find the difference in frequencies between cache
        // if it ever is higher than 3 immediately return false
    }
    return true
    // return true
};