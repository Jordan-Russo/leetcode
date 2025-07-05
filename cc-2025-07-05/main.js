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
 * @return {TreeNode}
 */
function bstToGst(root){
    let sum = 0;
    let gst = {val: null, left: null, right: null};
    let bst = root;
    // dfs but go right first, then itself after, then finally go left recursively
    // as you do the dfs, keep a sum that happens whenever you actually visit and count a node
    // initialize nodes as you go down but only fill the value as you return up
    function gstDFS(bst, gst){
        // check if there's a right
        if(bst.right){
            gst.right = {val: null, left: null, right: null};
            gstDFS(bst.right, gst.right)
        }
        sum += bst.val
        // check on the node
        gst.val = sum;
        // check on the left
        if(bst.left){
            gst.left = {val: null, left: null, right: null};
            gstDFS(bst.left, gst.left)
        }
    }
    gstDFS(bst, gst)
    return gst;
};