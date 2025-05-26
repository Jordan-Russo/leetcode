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
function sumRootToLeaf(root){
    let sum = 0;
    let curr = 0;
    function traverseTree(node){
        // return if node is not valid
        if(!node){return}
        // left bitshift curr
        curr <<= 1;
        // add node value to curr
        curr += node.val;
        // check if node is a leaf
        const isLeaf = !node.left && !node.right;
        // if no
        if(!isLeaf){
            // recursive call to node.left
            traverseTree(node.left);
            // recursive call to node.right
            traverseTree(node.right);
        }else{
            // if yes
            // add curr to sum
            sum += curr;
        }
        // right bitshift curr
        curr >>= 1;
    }
    traverseTree(root)
    return sum;
};
// Example 1:

// Input: root = [1,0,1,0,1,0,1]
// Output: 22
// Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

// Example 2:

// Input: root = [0]
// Output: 0