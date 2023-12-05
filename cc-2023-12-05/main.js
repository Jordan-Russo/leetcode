// url: https://leetcode.com/problems/plus-one/

// Given an array with each element representing a digit, return the array after adding 1 to the last element.
// The new value must be formatted in the same manner with only digits that go from 0-9.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

// step 1 increase last value by 1
// if last value isn't equal to 10 return the array
// if the last value is 10 set it equal to 0.
// increment previous value by 1.
// if there is no previous value insert a 1 before.

var plusOne = function(digits) {
    digits[digits.length - 1] += 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] != 10) {
            return digits
        } else {
            digits[i] = 0
            if(i - 1 >= 0){
                digits[i - 1] += 1;
            }else{
                digits.unshift(1)
            }
        }
    }
    return digits;
};