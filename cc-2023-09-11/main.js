// url: https://leetcode.com/problems/n-ary-tree-postorder-traversal/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

//  given the head node of a tree
// do a post order transversal
    // depth first (after visiting node, push node into the array)
// return the array containing all the nodes in that transversal

// walk for every node

function postorder(root) {
    const postorderArr = [];
    return postorderWalk(root, postorderArr);    
};

function postorderWalk(node, arr){
    // eventually return an array
    // basecase
        // if node is falsy
    if(!node){return arr}
    node.children.forEach(child => postorderWalk(child, arr));
    // recurse for every child
    // visit node after recursion is complete
    arr.push(node.val)
    // return array
    return arr;
}