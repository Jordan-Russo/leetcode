/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    // the 8 most frequent characters cost 1 each
    // the next 8 most frequent characteres cost 2 each
    // next 8 cost 3 each
    // then 4 each and so on...

    // build a frequency cache
    const cache = {};
    // loop through the word
    for(const char of word){
        // add values to cache
        cache[char] = cache[char] + 1 || 1;
    }
    // initialize a cost
    let cost = 0;
    // initialize a counter
    let count = 0;
    // loop through the keys, in value of decreasing frequency
    for(const val of Object.values(cache).sort((a,b) => b - a)){
        count++
        const multiplier = Math.ceil(count/8);
        cost += multiplier * val;
        // count the key
        // use the count / 8 rounded up to determine the multiplier for the key
        // add the cost
    }
    // return the cost
    return cost;
};