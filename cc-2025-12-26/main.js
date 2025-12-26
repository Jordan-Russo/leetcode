/**
 * @param {number[]} nums
 * @return {number}
 */
// given an integer array
    // will always have one or more values
// return the minimum distance between a tuple
    // distance is measured between each of the 3 elements to each other
    // |a - b| + |a - c| + |b - c|
var minimumDistance = function(nums) {
    let min = Infinity
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            for(let k = j + 1; k < nums.length; k++){
                const a = nums[i];
                const b = nums[j];
                const c = nums[k];
                if(a === b && b === c){
                    const distance = Math.abs(i - j) + Math.abs(i - k) + Math.abs(j - k);
                    min = Math.min(min, distance);
                }
            }
        }
    }
    if(isFinite(min) === false){
        return -1;
    }
    return min;
};