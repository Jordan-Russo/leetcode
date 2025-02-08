// url: https://leetcode.com/problems/intersection-of-multiple-arrays/
// given a 2D integer array, where each subarray contains distinct positive integers
// return an array containing all the integers that can be found in each subarray of nums
// the elements should be returned in ascending order
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
function intersection(nums){
    const intersection = new Set(nums[0]);
    for(let i = 1; i < nums.length; i++){
        const seen = new Set(nums[i]);
        for(const num of intersection){
            if(!seen.has(num)){
                intersection.delete(num);
            }
        }
    }
    return [...intersection].sort((a,b) => a - b);
};
// console.log(intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]), [3,4]);
// console.log(intersection([[1,2,3],[4,5,6]]), []);