// url: https://leetcode.com/problems/min-stack/

// Given a datastructure that needs the following stack-like behaviors:
// needs to accept elements and place on the top of a stack
// needs to remove the top element of a stack from the stack
// needs to state the value of  the top element of the stack
// needs to state the minimum value within the stack
// ALL NEED TO BE O(1).

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2

// initalize 2 stacks
// one holds values
// other holds minimum values at and below 
// initializing the minStack creates 2 stacks
// pushing adds the value to one of the stacks but adds the minimum value to the other stack
    // a variable is needed to keep track of the minimum value as we change it.
// top returns the value of the normal stack
// getMin returns the value of the minStack.

class MinStack{
    constructor(){
        this._min = Infinity;
        this.stack = [];
        this.minStack = [];
    }
    push(val){
        this.stack.push(val);
        this._min = Math.min(this._min, val);
        this.minStack.push(this._min);
    }
    pop(){
        this.minStack.pop();
        const poppedVal = this.stack.pop();
        this._min = this.getMin();
        return poppedVal;
    }
    top(){
        return this.stack[this.stack.length - 1];
    }
    getMin(){
        return this.minStack[this.minStack.length - 1] ?? Infinity;
    }
}

/** 
 * @param {number} val
 * @return {void}
 */
/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */