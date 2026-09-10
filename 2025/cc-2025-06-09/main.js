/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minDeletion = function(s, k) {
    // cache of each letter and quantity in the string
    const cache = {};
    let size = 0;
    for(const char of s){
        if(cache[char] === undefined){
            cache[char] = 0;
            size++;
        }
        cache[char]++;
    }
    // find distinct letter count
    // if distinct letters <= k, return 0
    if(size <= k){return 0}
    // initialize deletions at 0
    let deletionCount = 0;
    // make a frequency cache storing how many letters have a specific frequency, out of 16
    const frequencyCache = new Array(16).fill(0);
    for(const frequency of Object.values(cache)){
        frequencyCache[frequency - 1]++;
    }
    // loop from frequencies 1 to 16
    for(let i = 0; i < 16; i++){
        // add the minimum of size - k and frequency cache value, after multiplying it by the frequency key amount
        const min = Math.min(size - k, frequencyCache[i])
        // decrease the distinct letter count
        size -= min;
        // add removed characters to deletion count
        deletionCount += min * (i + 1);
        // if k === distinct letter count then escape
        
    }
    // return the deletion count
    return deletionCount;
};
// console.log(minDeletion("abc",2), 1);
// console.log(minDeletion("aabb",2), 0);
// console.log(minDeletion("yyyzz", 1), 2);