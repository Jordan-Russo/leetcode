/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueEven = function(nums) {
    // map cache for count
    const cache = new Map();
    for(const num of nums){
        if(!cache.has(num)){
            cache.set(num, 0);
        }
        cache.set(num, cache.get(num) + 1);
    }
    // loop through the [keys,values] of the map cache
    for(const [key, value] of cache){
        const isUnique = value === 1;
        const isEven = (key & 1) === 0;
        if(isUnique && isEven){
            return key;
        }
    }
    return -1;
};