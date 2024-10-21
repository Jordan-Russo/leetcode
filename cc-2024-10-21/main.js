// url: https://leetcode.com/problems/sort-an-array/description/
// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

 

// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    return quickSort(nums);
    function quickSort(arr, low = 0, high = nums.length - 1){
        if(low >= high){return arr}
        const pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
        return arr;
    }
    // grab partition index 
    // call function again on both sides of the partition
    function partition(arr, low, high){
        // first determine random index between low and high
        const randomIndex = Math.floor(Math.random() * (high - low + 1)) + low;
        const pivot = arr[randomIndex];
        arr[randomIndex] = arr[high];
        arr[high] = pivot;
        // make that the pivotIndex
        let pivotIndex = low;
        // sort all elements ABOUT the pivot
        for(let i = low; i < high; i++){
            const curr = arr[i];
            if(curr < pivot){
                arr[i] = arr[pivotIndex];
                arr[pivotIndex] = curr;
                pivotIndex++;
            }
        }
        arr[high] = arr[pivotIndex];
        arr[pivotIndex] = pivot;
        // return the pivotIndex
        return pivotIndex;
    }
};