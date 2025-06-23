/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// given two binary trees
// return whether the sequence of leaf values is the same as a boolean value (t/f)
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
function dfs(node, sequence){
// perform a dfs
    if(!node.left && !node.right){
        sequence.push(node.val);
    }
    // if node is a leaf
        // push .val to array literal
    if(node.left){
        dfs(node.left, sequence);
    }
    if(node.right){
        dfs(node.right, sequence);
    }
}
function leafSequence(root){
    // initialize an array literal
    const sequence = [];
    dfs(root, sequence);
    // return array literal
    return sequence;
}
function leafSimilar(root1, root2){
    // make a function that takes in a root node of a binary tree
        // returns an array sequence of the leaf values, in dfs traversal
    // call that function for both root1 and root2 and return whether the arrays have all the same values
    const sequence1 = leafSequence(root1);
    const sequence2 = leafSequence(root2);
    if(sequence1.length !== sequence2.length){return false}
    return sequence1.every((value, index) => value === sequence2[index]);
};
// Example 1:

// Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
// Output: true

// Example 2:

// Input: root1 = [1,2,3], root2 = [1,3,2]
// Output: false