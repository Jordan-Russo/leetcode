/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minDistinctFreqPair = function(nums) {
    const cache = {};
    for(const num of nums){
        cache[num] ??= 0;
        cache[num]++;
    }
    const frequencies = new Set(Object.values(cache));
    if(frequencies.size < 2){return [-1, -1]}
    let lowestValue;
    for(const key in cache){
        if(lowestValue){
            if(cache[lowestValue] !== cache[key]){
                return [lowestValue, Number(key)];
            }
        }
        lowestValue ??= Number(key);
    }
};