/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    let count = 0;
    let i = 1;
    while(i < nums.length - 1){
        const curr = nums[i];
        // find the next and previous values that are not equal to curr
        let prev = nums[i - 1];
        for(let j = i - 1; j >= 0; j--){
            if(nums[j] !== curr){
                prev = nums[j]
                break;
            }
        }
        let next = nums[i + 1];
        let nextPos = i + 1;
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] !== curr){
                next = nums[j]
                nextPos = j;
                break;
            }
        }  
        const isHill = curr > prev && curr > next;
        const isValley = curr < prev && curr < next;
        if(isHill || isValley){
            count++;
        }
        i = nextPos;
    }
    return count;
};