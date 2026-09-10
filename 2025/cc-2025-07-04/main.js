/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
    let result = [];
    let targetPos = nums.indexOf(key);
    for(let i = 0; i < nums.length; i++){
        if(i > targetPos + k){
            targetPos = nums.indexOf(key, targetPos + 1);
            if(targetPos === -1){return result}
        }
        let inRange = Math.abs(targetPos - i) <= k;
        if(inRange){result.push(i)}
    }
    return result;
};