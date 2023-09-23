// url: https://leetcode.com/problems/average-of-levels-in-binary-tree/

// Given the root of a binary tree

// Return the average value of the nodes on each level in the form of an array.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [3.00000,14.50000,11.00000]
// Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
// Hence return [3, 14.5, 11].

// Example 2:
// Input: root = [3,9,20,15,7]
// Output: [3.00000,14.50000,11.00000]

// Initializer Functon
// requires root
// Calls recursive function
    // queue
        // if root then with [root]
        // otherwise with []
    // levels arr, []

// Recursive Function: BFS
    // requires stack
        // if stack empty return 
    // levels arr
    // initalize values arr, []
    // intialize children arr, []
    // loop while stack.length > 0
        // remove node from stack
        // add val of node to values arr
        // push children into children arr
    // use values arr to calculate avg
    // push calculated avg into levels arr
    
    // return recursive call using
        // children arr as the stack
        // levels arr


// Helper funciton: average
    // given an array of numbers
    // return average of those numbers
    // will be called with length > 0
        // basecase already handles length === 0

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
 * @return {number[]}
 */

function averageOfLevels(root) {
    const levelAverages = [];
    const queue = [];
    if(root){
        queue.push(root);
    }
    return bfs(levelAverages, queue);
};

function bfs(levelAverages, queue){
    if(queue.length === 0){return levelAverages}
    const children = [];
    const values = [];
    while(queue.length > 0){
        const node = queue.pop();
        values.push(node.val);
        if(node.left){
            children.push(node.left)
        }
        if(node.right){
            children.push(node.right)
        }
    }
    levelAverages.push(average(values));
    // push avg
    return bfs(levelAverages, children)
    // recurse
}


function average(arr){
    let sum = 0;
    for(const val of arr){
        sum += val;
    }
    sum /= arr.length || 1;
    return sum;
}