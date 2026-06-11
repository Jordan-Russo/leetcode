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
var averageOfSubtree = function(root) {
    // store count as an outer scope variable
    let result = 0;
    
    recursiveSubtreeAverageCheck(root); 

    function recursiveSubtreeAverageCheck(node){
    // returns [sum, count]
    // calculates average and compares it to current node value
        // if matching then resulting count increments 
    // dfs post-order traversal
        // go left
        let left;
        if(node.left){
            left = recursiveSubtreeAverageCheck(node.left);
        }else{
            left = [0,0];
        }
        // go right
        let right;
        if(node.right){
            right = recursiveSubtreeAverageCheck(node.right);
        }else{
            right = [0,0];
        }
        // check the current node
        // calculate and return
        const sum = node.val + left[0] + right[0];
        const nodeCount = 1 + left[1] + right[1];
        const average = Math.trunc(sum / nodeCount);
        if(average === node.val){result++}
        return [sum, nodeCount];
    }

    return result;
};