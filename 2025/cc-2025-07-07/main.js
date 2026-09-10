/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
    let count = 0;
    let max = getCumulativeOR(nums);
    evaluateSubsets([], 0);
    function evaluateSubsets(arr, index){
        if(index === nums.length){
            if(getCumulativeOR(arr) === max){
                count++;
            }
            return;
        }
        const curr = nums[index];
        evaluateSubsets(arr.concat(curr), index + 1);
        evaluateSubsets(arr, index + 1);
    }
    return count;
};
function getCumulativeOR(arr){
    return arr.reduce((acc, c) => acc | c, 0);
}