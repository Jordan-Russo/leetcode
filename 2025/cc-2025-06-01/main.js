/**
 * @param {number[]} nums
 * @return {number[]}
 */
// given an array of distinct positive integers, nums, length > 2
// return the result array, from merging two split arrays
    // there are two arrays that get made, arr1 and arr2
    // first element goes in arr1, 2nd in arr2
    // each one after that goes in will go in arr1 if the last element of arr1 > last element of arr2 and otherwise goes in arr2
var resultArray = function(nums) {
    // initialize arr1 as an arr with the first element
    const arr1 = [nums[0]];
    // and arr2 as an arr with the second element
    const arr2 = [nums[1]];
    // loop through the third element and all after
    for(let i = 2; i < nums.length; i++){
        // check whether or not the last element in arr1 is > last element in arr2
        const arr1HasGreaterLast = arr1.at(-1) > arr2.at(-1);
        // if yes
            // push to arr1
        // if no
            // push to arr2
        arr1HasGreaterLast ? arr1.push(nums[i]) : arr2.push(nums[i]);
    }
    // return arr1 concated by arr2
    return arr1.concat(arr2);
};
// console.log(resultArray([2,1,3]), [2,3,1]);
// console.log(resultArray([5,4,3,8]), [5,3,4,8]);