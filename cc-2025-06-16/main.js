/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let sum = 0;
    for(let i = 0; i < nums.length / 2; i++){
        if(i === nums.length - 1 - i){
            sum += nums[i];
        }else{
            sum += Number(`${nums[i]}${nums[nums.length - 1 - i]}`);
        }
    }
    return sum;
};