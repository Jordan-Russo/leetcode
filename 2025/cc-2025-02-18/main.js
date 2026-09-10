// url: https://leetcode.com/problems/evaluate-boolean-binary-tree/
// given the root of a full binary tree

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
function evaluateTree(root) {
    // check if a node exists
    // if it has a value
    // 0 returns false
    // 1 returns true
    // 2 returns left child value || right child value
    // 3 returns left child value && right child value
    function recursion(node){
        const {val} = node;
        if(val === 0){return false}
        if(val === 1){return true}
        if(val === 2){return recursion(node.left) || recursion(node.right)}
        if(val === 3){return recursion(node.left) && recursion(node.right)}
    }
    return recursion(root);
};