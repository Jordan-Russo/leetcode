// url: https://leetcode.io/problems/meeting-schedule
// Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] (start_i < end_i), determine if a person could add all meetings to their schedule without any conflicts.
/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings([...intervals]) {
        intervals.sort(({start: a},{start: b}) => a - b);
        for(let i = 1; i < intervals.length; i++){
            const curr = intervals[i]['start'];
            const prev = intervals[i - 1]['end'];
            const hasConflict = prev > curr;
            if(hasConflict){return false;}
        }
        return true;
    }
}
// Example 1:

// Input: intervals = [(0,30),(5,10),(15,20)]

// Output: false

// Explanation:

//     (0,30) and (5,10) will conflict
//     (0,30) and (15,20) will conflict

// Example 2:

// Input: intervals = [(5,8),(9,15)]

// Output: true
