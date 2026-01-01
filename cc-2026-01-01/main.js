/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let left = 0;
    let right = 0;
    while(left < nums1.length && right < nums2.length){
        const isEqual = nums1[left] === nums2[right];
        if(isEqual){return nums1[left]}
        if(nums1[left] < nums2[right]){
            left++;
        }else{
            right++;
        }
    }
    return -1;
};