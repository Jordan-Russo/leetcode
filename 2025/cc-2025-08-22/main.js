/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    let a;
    let b;
    // loop to grab the two smallest elements that aren't nums[0].
    for(let i = 1; i < nums.length; i++){
        if(!a){
            a = nums[i];
        }else if(!b){
            b = Math.max(nums[i], a);
            a = Math.min(nums[i], a);
        }else{
            if(nums[i] < a){
                b = a;
                a = nums[i];
            }else if(nums[i] < b){
                b = nums[i];
            }
        }
    }
    return a + b + nums[0];
};