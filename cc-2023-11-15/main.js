// url: https://leetcode.com/problems/koko-eating-bananas/

// given an an array of integers
// return the minimum rate koko must eat (bananas per hour) for all piles to be empty in the given amount of hours
    // koko can't eat any pile faster than 1 hour regardless of how few bananas there are


// Example 1:
// Input: piles = [3,6,7,11], h = 8
// Output: 4

// Example 2:
// Input: piles = [30,11,23,4,20], h = 5
// Output: 30

// Example 3:
// Input: piles = [30,11,23,4,20], h = 6
// Output: 23

// initialize max as the size of the largest pile
// create an array that goes from 1 to max that describes the rates of eating
// *modified* actually don't create an array just store a middle value, get rate by taking middle + 1.
// let low = 0
// let high = max
// initialize middle
// do a binary search on that eating rate array at each index
    // deteremine middle by taking the average and flooring between low and high
    // compare time using that rate vs hours given
    // if 
    // if there's not enough time
        // let low = middle + 1
    // if there's too much time
        // let high = middle



/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    const max = Math.max(...piles)
    // handle cases where there's only a single pile
    let low = 0
    let high = max
    let middle;
    const timeToEat = (numPerHr) => piles.reduce((hours, curr) => hours + Math.ceil(curr / numPerHr), 0)
    while(low < high){
        middle = Math.floor((high + low) / 2)
        const rate = middle + 1
        const time = timeToEat(rate)
        if(time === h && timeToEat(middle) !== time){
            // calculate if there's a slower eating rate that takes the same amount of hours
            return rate
        }else if(time > h){
            low = middle + 1
        }else{
            high = middle
        }
    }
    return high + 1
};