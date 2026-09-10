// given two positive integers, low and high limit where highLimit >= lowLimit
// boxes are stored in the location with the sum of their digits
// return the # of balls, a positive integer, that is in the box with most balls
/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
function countBalls(lowLimit, highLimit){
    // make a way to store the frequency of each box
    const boxes = {};
    // loop from lowLimit to highLimit inclusive
    for(let i = lowLimit; i <= highLimit; i++){
        // calculate the digitSum
        let digitSum = 0;
        let num = i;
        while(num > 0){
            const digit = num % 10;
            digitSum += digit;
            num = Math.floor(num / 10);
        }
        // store the ball in its respective box
        boxes[digitSum] = boxes[digitSum] + 1 || 1;
    }
    // determine the maximum amount of balls in a single box
    // return the maximum amount of balls in a single box
    return Math.max(...Object.values(boxes));
};
console.log(countBalls(1,10),2);
console.log(countBalls(5,15),2);
console.log(countBalls(19,28),2);