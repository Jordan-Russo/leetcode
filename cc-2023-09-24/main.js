// url: https://leetcode.com/problems/balanced-binary-tree/

// Given the root of a binary tree

// Return a boolean on whether it's height is balanced
    // height balanced: min-and max height have a range that is no greater than 1.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Example 2:
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// Example 3:
// Input: root = []
// Output: true

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
 * @return {boolean}
 */
function isBalanced(root){
    const stack = root ? [root] : []
    return bfs(stack, 0, undefined);
}


// bfs
// base cases
// if a min-height was found and currHeight === minHeight + 1
    // return false
// if queue.length === 0 
    // return true
// Increment height value
// pop all children in queue
    // if any popped nodes don't have 2 children
        // set minHeight to curr height if it's nullish
    // push children to a new queue.
// return recursive call to children queue

function bfs(stack, currHeight, minHeight){
    if(minHeight + 1 === currHeight){
        return false
    }
    if(stack.length === 0){return true}
    currHeight++;
    const children = [];
    while(stack.length > 0){
        const node = stack.pop();
        if(!node?.left && !node?.right){
            minHeight ??= currHeight
        }
        if(node?.left){
            children.push(node.left)
        }
        if(node?.right){
            children.push(node.push)
        }
    }
    return bfs(children, currHeight, minHeight);
}