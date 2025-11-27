/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    // initialize a frequency cache
    let cache = {};
    // loop through dominoes
    for(const [a, b] of dominoes){
        // for every pair
        // serialize the pair, in ascending order with a delimiter inbetween
        let min = Math.min(a,b);
        let max = Math.max(a,b);
        const key = `${min}:${max}`;
        // store and increment it inside of the frequency cache
        cache[key] = cache[key] + 1 || 1;
    }
    // initialize a count at 0
    let count = 0;
    // loop through the frequency cache
    for(const key in cache){
        const n = cache[key];
        const combinations = n * (n - 1) / 2
        count += combinations;
    // 2 -> 1
    // 3 -> 3
    // 4 -> 6
    // 5 -> 10
    // combination formula C = n! / ((n - r)! * r)
        // where n is the number of items
        // and r is the selection side
        // when r = 2, it simplifies to gauss sum formula
    }
    return count;
};