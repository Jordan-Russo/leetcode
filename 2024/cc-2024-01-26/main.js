/**
 * @param {number} num
 * @return {number}
 */
// create a cache for odds and evens
    // hash
    // preload all the keys
// Loop through all digits in the num
    // add the frequency of each digit to its respective cache
    // use a string to keep track of the even/odd state of each digit of the number
// use each to create a stack for odds and evens

// use the cache/stacks of odds and evens with the even/odd state to make the largest number
    // the created number must have its digits still have the same even/odd positions

// Example 1:

// Input: num = 1234
// Output: 3412
// Explanation: Swap the digit 3 with the digit 1, this results in the number 3214.
// Swap the digit 2 with the digit 4, this results in the number 3412.
// Note that there may be other sequences of swaps but it can be shown that 3412 is the largest possible number.
// Also note that we may not swap the digit 4 with the digit 1 since they are of different parities.
// Example 2:

// Input: num = 65875
// Output: 87655
// Explanation: Swap the digit 8 with the digit 6, this results in the number 85675.
// Swap the first digit 5 with the digit 7, this results in the number 87655.
// Note that there may be other sequences of swaps but it can be shown that 87655 is the largest possible number.

var largestInteger = function(num){
    let newNum = num
    let even = {
        0: 0,
        2: 0,
        4: 0,
        6: 0,
        8: 0
    }
    let odd = {
        1: 0,
        3: 0,
        5: 0,
        7: 0,
        9: 0
    }
    let parity = ''
    let position = 0
    while(newNum !== 0){
        const digit = newNum % 10
        const isOdd = (digit & 1) === 1
        parity = (isOdd ? 'o' : 'e') + parity
        isOdd ? odd[digit]++ : even[digit]++
        newNum -= digit
        newNum /= 10
    }
    const oddStack = []
    for(let [val, freq] of Object.entries(odd)){
        while(freq !== 0){
            oddStack.push(+val)
            freq--
        }
    }
        const evenStack = []
    for(let [val, freq] of Object.entries(even)){
        while(freq !== 0){
            evenStack.push(+val)
            freq--
        }
    }
    while(newNum < num){
        const isOdd = parity[position++] === 'o'
        newNum *= 10
        newNum += isOdd ? oddStack.pop() : evenStack.pop()
    }
    return newNum
};