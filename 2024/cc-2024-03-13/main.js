// url: https://leetcode.com/problems/next-greater-element-i/description/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// Given two arrays, nums1 and nums2
    // where nums1 is a subset of nums2
    // and where both of the arrays are distinct integer arrays
// Map and return the next greatest element for each of the elements in nums1 that is found in nums2

// Example 1:

// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// Example 2:

// Input: nums1 = [2,4], nums2 = [1,2,3,4]
// Output: [3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
// - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.

// naive method
    // loop through all the elements in nums1
        // for each number:
        // find its position in nums2
        // map it as the next number that is  greater than it in nums2
            // or -1 if there is no such number
    // return the new mapped array of nums1 that shows the next greatetr element

    function nextGreaterElement(nums1, nums2){
        return nums1.map(val => {
            const start = nums2.indexOf(val)
            return nums2.find((num, i) => num > val && i > start)|| -1
        })
    };
    
    // stack + cache + left nums2 loop
        // create a set, which contains all of the subset(nums1) elements
        // create a stack, initialized as empty
        // create a cache, initialized as empty
        // begin looping through nums2
            // while num > top of stack
                // cache, key as stack item, value as num
                // remove item from stack
            // if stack empty + num not in set
                // continue
            // push num to stack
        // loop through stack
            // assign each element into cache with value of -1
        // create new array mapping nums1 with the new values from the cache
    
    function nextGreaterElement(nums1, nums2){
        const subset = new Set(nums1)
        const elements = []
        const nextGreater = {}
        for(const num of nums2){
            while(num > elements[elements.length - 1]){
                nextGreater[elements.pop()] = num
            }
            if(subset.has(num)){
                elements.push(num)
            }
        }
        while(elements.length > 0){
            nextGreater[elements.pop()] = -1
        }
        return nums1.map(num => nextGreater[num])
    };