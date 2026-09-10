// url: https://leetcode.com/problems/group-anagrams/

// Given an array of strings

// Return an array of arrays, where all groups of anagrams are put together
    // Answer can be returned in any order

// Anagrams are two words that have the exact same letters.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]
 
// we need a way to serialize an anagram
// we have a cache that has a key of these anagram serializations
// then the key holds onto an array of values
// then as we loop through all of the strings in the array, we create new arrays and push these strings into the right keys
// then we return the array of arrays as we iterate through the cache's values.

// start out with a function that takes a string
// returns serialized anagram key name
function anagramSerializationCode(str){
    const cache = {};
    for(const char of str){
        cache[char] ??= 0;
        cache[char]++;
    }
    // put them all in.
    return Object.entries(cache).sort(([key1, val1], [key2, val2]) => key1.localeCompare(key2)).join('');
    // then order the characters.
    // then turn it into a string.
}


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const cache = {};
    for(const str of strs){
        const key = anagramSerializationCode(str);
        cache[key] ??= [];
        cache[key].push(str);
    }
    return Object.values(cache);
};