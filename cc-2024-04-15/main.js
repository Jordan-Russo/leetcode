// url: https://leetcode.com/problems/top-k-frequent-words/
// Given an array of strings words and an integer k, return the k most frequent strings.
// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
// Example 1:

// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:

// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

var topKFrequent = function(words, k) {
    // make a frequency cache
    const wordCache = {}
    for(const word of words){
        wordCache[word] ??= 0
        wordCache[word]++
    }
    // make a set with keys of frequency and value of an array with whatever words match have the frequency
    const wordFrequencies = new Map()
    for(const word in wordCache){
        const frequency = wordCache[word]
        if(!wordFrequencies.has(frequency)){
            wordFrequencies.set(frequency, [])
        }
        wordFrequencies.get(frequency).push(word)
    }
    const result = []
    let currentFrequency = words.length
    while(result.length < k){
        let pos = 0
        const hasWords = wordFrequencies.get(currentFrequency)
        if(hasWords){
            hasWords.sort();
            while(pos < hasWords.length){
                if(result.length === k){
                    break;
                }
                result.push(hasWords[pos++])
            }
        }
        currentFrequency--
    // loop through the sets descending
        // if there's an array sort it and push from left to right

    }
    return result
    // return 
};