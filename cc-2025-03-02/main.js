// url: https://leetcode.com/problems/calculator-with-method-chaining/
// create a calculator class that starts with a given value, as a number
// all instances will have the following methods
// each method will return the calculator after its operation
// add: given another number, add it to the calculator and assign it
// subtract: given another number, subtract it from the calculator value and assign it
// divide: given another number, store the quotient as the value, but if the divisor is 0, throw an error
    // error: "Division by zero is not allowed"
// multiply: given another number, store the product as the value
// power: raises the calculator value to the given exponent
class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.value = value;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.value += value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.value -= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.value *= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if(value === 0){throw new Error("Division by zero is not allowed")}
        this.value /= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.value **= value;
        return this;
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.value;        
    }
}
// Example 1:

// Input: 
// actions = ["Calculator", "add", "subtract", "getResult"], 
// values = [10, 5, 7]
// Output: 8
// Explanation: 
// new Calculator(10).add(5).subtract(7).getResult() // 10 + 5 - 7 = 8

// Example 2:

// Input: 
// actions = ["Calculator", "multiply", "power", "getResult"], 
// values = [2, 5, 2]
// Output: 100
// Explanation: 
// new Calculator(2).multiply(5).power(2).getResult() // (2 * 5) ^ 2 = 100

// Example 3:

// Input: 
// actions = ["Calculator", "divide", "getResult"], 
// values = [20, 0]
// Output: "Division by zero is not allowed"
// Explanation: 
// new Calculator(20).divide(0).getResult() // 20 / 0 

// The error should be thrown because we cannot divide by zero.