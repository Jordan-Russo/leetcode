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
// given a binary tree
    // will always have at least one node
    // maximum branching factor of 2, but can have 0 and 1 descendents as well
// returns a boolean, t/f , whether or not all nodes have the same value
function isUnivalTree(root){
    const univalue = root.val;
    return recursiveUnivalTree(root, univalue);
    // grab our univalue from the root and recursive search using it
};
function recursiveUnivalTree(node, univalue){
    if(!node){return true}
    // if node doesn't exist return true, since it's not a different value
    if(node.val !== univalue){
        return false;
    }
    // if node has a value that isn't equal to univalue return false
    return recursiveUnivalTree(node.left, univalue) && recursiveUnivalTree(node.right, univalue);
    // otherwise return whether the left child and right child are also equal to univalue (recursive call)
}
// console.log(isUnivalTree({val: 1, 
// left: {
//     val: 1, 
//     left: {
//         val: 1, left: null, right: null
//     },
//     right: {
//         val: 1, left: null, right: null
//     }
// },
// right: {
//     val: 1, left: null,
//     right: {
//         val: 1, left: null, right: null
//     }
// }}), true);

// console.log(isUnivalTree({val: 2, 
// left: {
//     val: 2, 
//     left: {
//         val: 5, left: null, right: null
//     },
//     right: {
//         val: 2, left: null, right: null
//     }
// },
// right: {
//     val: 2, left: null, right: null
// }}), false);