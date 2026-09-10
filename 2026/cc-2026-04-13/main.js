/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function(matrix) {
    const cache = {};
    for(const vertex of matrix){
        for(let i = 0; i < vertex.length; i++){
            cache[i] ??= 0;
            cache[i] += vertex[i] === 1 ? 1 : 0;
        }
    }
    return Object.values(cache);
};