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
 * @param {number} val
 * @return {TreeNode}
 */

// helper 
// check value of new node with current node
// if value is less than node
    // check left child
    // if no left child add node
    // otherwise transverse to left child with the value
// greater than
    // right child
    // no child add otherwise transverse
// once you eventually added the node in return the root

function insertIntoBST(root, val){
    newNode = {val, right: null, left: null}
    bstInsert(root, val);
    return root;
};
function bstInsert(node, val){
    if(!node){return}
    if(node.val < val){
        if(node.right){
            return bstInsert(node.right, val);
        }
        node.right = newNode;
    }else{
        if(node.left){
            return bstInsert(node.left, val);
        }
        node.left = newNode;
    }
}