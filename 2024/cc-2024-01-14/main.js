// url: https://leetcode.com/problems/student-attendance-record-i/
// given a string that represents attendence day-by-day
// return whether a student qualifies for an attendance award
// disqualified if:
    // absent 2 or more times
    // late 3 or more days in a row
// Example 1:

// Input: s = "PPALLP"
// Output: true
// Explanation: The student has fewer than 2 absences and was never late 3 or more consecutive days.
// Example 2:

// Input: s = "PPALLL"
// Output: false
// Explanation: The student was late 3 consecutive days in the last 3 days, so is not eligible for the award.
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absentCount = 0
    let consecutivesLates = 0
    for(let day = 0; day < s.length; day++){
        const status = s[day]
        if(status === 'A'){
            absentCount++
            if(absentCount > 1){
                return false
            }
        }
        if(status === 'L'){
            consecutivesLates++
            if(consecutivesLates > 2){
                return false
            }
        }else{
            consecutivesLates = 0
        }
    }
    return true
};