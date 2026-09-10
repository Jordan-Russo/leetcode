/**
 * @param {number[]} nums
 * @return {number[]}
 */
var lastVisitedIntegers = function(nums) {
    const ans = [];
    const seen = [];
    let k = 0;
    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        const isPositive = num > 0;
        if(isPositive){
            seen.unshift(num);
        }else{
            if(nums[i - 1] !== -1){k = 0}
            if(k <= seen.length - 1){
                ans.push(seen[k]);
            }else{
                ans.push(-1);
            }
            k++;
        }
    }
    return ans;
};