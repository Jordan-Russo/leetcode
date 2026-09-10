// url: https://leetcode.com/problems/trapping-rain-water

// Given an array, of non-negative integers

// return how much water can be held within each of these numbers if it rained.

// start with both the left and right pointers at each end of the heights
// keep track of the total water
    // initialized as 0
// keep track of leftMaxHeight and rightMaxHeight
    // initialized as 0

// keep looping until left pointer is no longer less than right pointer

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let leftI = 0;
    let rightI = height.length - 1;
    let water = 0;
    let leftMax = height[0];
    let rightMax = height[height.length - 1];
    while(leftI <= rightI){
        const left = height[leftI];
        const right = height[rightI];
        if(left >= right){
            water += Math.max(Math.min(leftMax, rightMax) - height[rightI], 0);
            rightI--;
            rightMax = Math.max(rightMax, height[rightI]);
        }else{
            water += Math.max(Math.min(leftMax, rightMax) - height[leftI], 0);
            leftI++;
            leftMax = Math.max(leftMax, height[leftI]);
        }
    }
    return water;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]), 6)
console.log(trap([4,2,0,3,2,5]), 9)