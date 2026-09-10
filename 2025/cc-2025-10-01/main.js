/**
 * @param {string} s
 * @return {string}
 */
var majorityFrequencyGroup = function(s) {
    // given a string s, made of only lowercase english letters
    // a frequency group for a value k, is the set of characters that appear exactly k times in s
    // majority frequency group is the group that contains the largest amount of distinct letters
    // return a string containing all the distinct characters from the majorty frequency group (in any order)
    // if multiple groups tie for the majority frequency group, pick the one with highest frequency

    // create a cache
    const cache = {};
    for(const letter of s){
        cache[letter] = cache[letter] + 1 || 1;
    }
    // create a frequency cache
    const frequencyCache = {};
    for(const letter in cache){
        const freq = cache[letter]
        if(frequencyCache[freq]){
            frequencyCache[freq].push(letter);
        }else{
            frequencyCache[freq] = [letter];
        }
    }
    // keep track of maxDistinct letters and the freequency of those
    let maxDistinctLetters = '';
    for(const freq in frequencyCache){
        // loop through the frequencies
        // if the distinct char count is > then maxDistinct 
            // update maxDistinct letters and its freq
        if(frequencyCache[freq].length >= maxDistinctLetters.length){
            maxDistinctLetters = frequencyCache[freq].join('');
        }
    }
    return maxDistinctLetters;
};

// result string order doesn't matter
// console.log(majorityFrequencyGroup('aaabbbccdddde'), 'ab');
// console.log(majorityFrequencyGroup('abcd'), 'abcd');
// console.log(majorityFrequencyGroup('pfpfgi'), 'fp');