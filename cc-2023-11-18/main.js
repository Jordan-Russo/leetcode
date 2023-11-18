// url: https://leetcode.com/problems/shuffle-an-array/

// Create a datastructure that takes in an array

// Can shuffle and then return the value 

// Can reset the value (returns the original array)


/**
 * @param {number[]} nums
 */
class Solution{
    constructor(nums){
        this.nums = nums
    }
    shuffle(){
        const random = [...this.nums]
        for(let i = random.length - 1; i > 0; i--){
            const randomIndex = Math.floor(Math.random() * (i + 1))
            const randomValue = random[randomIndex]
            random[randomIndex] = random[i]
            random[i] = randomValue
        }
        return random
    }
    reset(){
        return this.nums
    }
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */