// url: https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/
// given:
    // array of positions of seats, 1-indexed
    // array of students, 1-indexed
    // length of seats and position arrays are the same, minimum 1, maximum 100
// return the minimum number of moves to move every student to a seat
/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
function minMovesToSeat(seats, students){
    // make a copy of seats and students
    seats = [...seats].sort((a,b) => a - b)
    students = [...students].sort((a,b) => a - b)
    // sort them
    let minMoves = 0
    // sum the absolute difference in position for each element in the newly sorted order
    for(let i = 0; i < seats.length; i++){
        minMoves += Math.abs(students[i] - seats[i])
    }
    return minMoves
    // return the difference as the minimum number of movements
};
// console.log(minMovesToSeat([3,1,5], [2,7,4]), 4)
// console.log(minMovesToSeat([4,1,5,9], [1,3,2,6]), 7)
// console.log(minMovesToSeat([2,2,6,6], [1,3,2,6]), 4)