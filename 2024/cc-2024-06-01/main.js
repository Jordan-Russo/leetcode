// url: https://leetcode.com/problems/minimum-index-sum-of-two-lists/description/
// Given two arrays of strings
// find and return all the strings that occured in both of the lists that have the minimum index sum
    // in any order
// Example 1:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only common string is "Shogun".

// Example 2:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
// Output: ["Shogun"]
// Explanation: The common string with the least index sum is "Shogun" with index sum = (0 + 1) = 1.

// Example 3:

// Input: list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
// Output: ["sad","happy"]
// Explanation: There are three common strings:
// "happy" with index sum = (0 + 1) = 1.
// "sad" with index sum = (1 + 0) = 1.
// "good" with index sum = (2 + 2) = 4.
// The strings with the least index sum are "sad" and "happy".

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */

function findRestaurant (list1, list2) {
    // build a cache one of the lists with the word as the key and the index
    const cache = {}
    for(let i = 0; i < list1.length; i++){
        cache[list1[i]] = i
    }
    const results = []
    let minimum = Infinity
    for(let i = 0; i < list2.length; i++){
        // cross compare and check cache
        // calculate the minimum sum, then handle if it's under, equal, or over.
        const curr = list2[i]
        if(curr in cache){
            const sum = i + cache[curr]
            if(sum <= minimum){
                if(sum < minimum){
                    results.length = 0
                    minimum = sum
                }
                results.push(curr)
            }
        }
    }
    return results
};