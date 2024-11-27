// url: https://leetcode.com/problems/find-mode-in-binary-search-tree/
// given the root of a binary search tree (bst)
  // root is never null
  // branch factor of 2, splits left and right
    // left side is <= and right side is >= the parent node

// return the modes in an array
  // mode being most frequent values seen
    // may have multiple, will always have at least one


function findMode(root){
  // create a counter that displays max frequency, start at 0
  let maxFreq = 0
  // counter for current frequency, start at 0
  let currFreq = 0
  // last seen values, start as null
  let lastSeen = null
  // array containing all values that has max frequency, start at []
  let modes = []
  inorderBST(root)
  function inorderBST(node){
  // perform an in-order transversal of the bst
    // go left, if it exists
    if(node.left){
      inorderBST(node.left)
    }
    // visit current node
    if(node.val !== lastSeen){
      currFreq = 0
      lastSeen = node.val
    // current value !== last seen value
      // set current frequency to 0
      // lasts seen value to current
    }
    currFreq++
    // increment current frequency
    if(currFreq > maxFreq){
    // if curr freq > max freq
      // clear array
      // reassign max freq === current freq
      modes.length = 0
      maxFreq = currFreq
    }
    if(currFreq === maxFreq){
    // if curr freq === max freq
      // push current value into array
      modes.push(node.val)
    }
    // go right, if it exists
    if(node.right){
      inorderBST(node.right)
    }
  }

  // return the array that contains all the maximum frequency values
  return modes
}
// [1, null, 2, 2] => [2]
// [0] => [0]
    