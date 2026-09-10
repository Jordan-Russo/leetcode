// url: https://leetcode.com/problems/deepest-leaves-sum/
// Given the root of a binary tree, return the sum of values of its deepest leaves. 
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    let level = [root];
    while(level.length){
        // create a new level
        const newLevel = [];
        // loop through level
        for(const node of level){
            // push any left and right children of the nodes into the new level
            if(node.left){newLevel.push(node.left)}
            if(node.right){newLevel.push(node.right)}
        }
        // assign the newlevel as the level
        if(newLevel.length === 0){break}
        level = newLevel;
    }
    const sum = level.reduce((acc, c) => acc + c.val, 0);
    return sum;
};
// Example 1:

// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15

// Example 2:

// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 19