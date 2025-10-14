/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
    // letter freq cache of s
    const sCache = {};
    for(const letter of s){
        sCache[letter] = sCache[letter] + 1 || 1;
    }
    // letter freq cache of target
    const targetCache = {};
    for(const letter of target){
        targetCache[letter] = targetCache[letter] + 1 || 1;
    }
    let minimum = Infinity;
    // loop through the target frequency cache and return the smallest rounded down quotient of the frequencies
        // the maximum amount of targets that can be made from the components of s
    for(const letter in targetCache){
        sCache[letter] ??= 0;
        minimum = Math.min(minimum, Math.floor(sCache[letter]/targetCache[letter]));
    }
    return minimum;
};