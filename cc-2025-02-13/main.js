// url: https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
// given a stack of sandwiches, and a queue of students, both integer arrays represented by either 0 or 1
// student and sandwich amount are the same but students must grab their preferred sandwich.
// return the number of students that are unable to get a sandwich
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    // make a frequency cache of the student's desired sandwich
    const frequencyCache = {};
    for(const student of students){
        frequencyCache[student] = frequencyCache[student] + 1 || 1;
    }
    // loop through the sandwiches
    for(let i = 0; i < sandwiches.length; i++){
        // once a sandwich isn't taken return how many are left
        if(frequencyCache[sandwiches[i]]){
            frequencyCache[sandwiches[i]]--;
        }else{
            return sandwiches.length - i;
        }
    }
    return 0;
};
// console.log(countStudents([1,1,0,0], [0,1,0,1]), 0);
// console.log(countStudents([1,1,1,0,0,1], [1,0,0,0,1,1]), 3);