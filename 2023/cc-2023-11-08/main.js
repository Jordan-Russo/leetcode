// url: https://leetcode.com/problems/daily-temperatures/

// Given an array of integers (will always have at least one element) that represent temperature.

// Return an array such that each index is the amount of days you have to wait until there is a warmer temperature
// if there is no warmer temperature return 0 for each index.

// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

// map each element to the first element after it that is greater than it or 0.


// naive O(n^2)
function dailyTemperatures(temps){
    return temps.map((temp, i, arr) => {
        const answer = arr.findIndex((e, j) => e > temp && j > i);
        return answer === -1 ? 0 : answer - i;
    })
}

// Use a stack to hold values and their index
// Use an array to hold the answer in days you waited.
// Loop through temperatures
    // while(top of the stack is less than the current temp)
        // pop it off the stack
        // assign its index the difference between the current index and its index in the array
    // push the current day and its index into the days stack.
// loop through all the indices still in the stack and asxsign their indices the value of 0
// return the new array

function dailyTemperatures(temps){
    const days = [];
    const temperatures = [];
    for(let day = 0; day < temps.length; ++day){
        while(days[days.length - 1]?.[0] < temps[day]){
            const [_, dayIndex] = days.pop();
            temperatures[dayIndex] = day - dayIndex;
        }
        days.push([temps[day], day]);
    }
    for(let day = days.length - 1; day >= 0; --day){
        temperatures[days[day][1]] = 0;
    }
    return temperatures;
}
