// url: https://leetcode.com/problems/chunk-array/
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const chunks = []
    for(let i = 0; i < arr.length; i += size){
        chunks.push(arr.slice(i, i + size))
    }
    return chunks
};
