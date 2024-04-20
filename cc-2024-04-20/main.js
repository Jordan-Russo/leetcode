var sortedArrayToBST = function(nums, left = 0, right = nums.length) {
    if(left >= right){
        return null
    }
    const middle = getMiddle(left, right)
    const node = createNode(nums[middle])
    node.left = sortedArrayToBST(nums, left, middle)
    node.right = sortedArrayToBST(nums, middle + 1, right)
    return node
};
function createNode(value){
    return ({
        val: value,
        left: null,
        right: null
    })
}

function getMiddle(left, right){
    return Math.trunc((left + right) / 2)
}