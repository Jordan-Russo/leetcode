// url: https://leetcode.com/problems/container-with-most-water/

// You are given an integer array height of length n

// a line is drawn at the floor and at the minimum height of one of the walls.

// Find two lines that toegther when used make the most 
// Return the maximum area that can be held by these two lines.

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

// Have two pointers from the left and right ends of the array

// initialize a curent and maximum area

// Area is calculated by the difference in left and right index  *  minimum height of the two indicies.

// Replace max if needed.

// Decide whether to move the left pointer right or the right pointer left by moving the smaller of the two numbers.

// Return max


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    let curr;
    while(left < right){
        curr = (right - left) * Math.min(height[left], height[right]);
        max = Math.max(curr, max);
        if(height[left] >= height[right]){
            right--;
        }else{
            left++;
        }
    }
    return max;
};   