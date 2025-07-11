/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function(traversal) {
    let pos = traversal.indexOf('-');
    if(pos === -1){pos = 1}
    const root = {val: Number(traversal.slice(0, pos)), left: null, right: null};
    function recoverTree(node, level){
        // check that a left child is valid
        if(depthCalculator(traversal, pos) === level){
            // extract the left child's number
            pos += level;
            let next = traversal.indexOf('-', pos) 
            if(next === -1){next = traversal.length}
            const val = Number(traversal.slice(pos, next === -1 ? traversal.length : next));
            // create the node and attach it to the current node
            const newNode = {val, left: null, right: null}
            // move the position
            node.left = newNode;
            // call the recurisve function for the child
            pos = next;
            recoverTree(node.left, level + 1);
        }
        // check that a right child is valid
            // call right child
        if(depthCalculator(traversal, pos) === level){
            // extract the left child's number
            pos += level;
            let next = traversal.indexOf('-', pos);
            if(next === -1){next = traversal.length}
            const val = Number(traversal.slice(pos, next === -1 ? traversal.length : next));
            // create the node and attach it to the current node
            const newNode = {val, left: null, right: null}
            // move the position
            node.right = newNode;
            // call the recurisve function for the child
            pos = next;
            recoverTree(node.right, level + 1);
        }
        // return
    }
    recoverTree(root, 1);
    return root;
};
function depthCalculator(traversal, pos){
    for(let i = pos + 1; i < traversal.length; i++){
        if(traversal[i] !== '-'){
            return i - pos;
        }
    }
}