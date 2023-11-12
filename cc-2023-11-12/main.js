// url: https://leetcode.com/problems/largest-rectangle-in-histogram/

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const rectangles = []
    let maxArea = 0
    for(let i = 0; i < heights.length; ++i){
        const curr = heights[i]
        while(rectangles.at(-1)?.[0] > curr){
            const [height, start] = rectangles.pop()
            const area = (i - start) * height
            maxArea = Math.max(area, maxArea);
            if(rectangles.at(-1)?.[0] >= curr === false){
                rectangles.push([curr, start])
            }
        }

        if(rectangles.length === 0 && curr > 0){
            rectangles.push([curr, i])
            continue;
        }


        if(curr > rectangles.at(-1)?.[0]){
            rectangles.push([curr, i])
            continue
        }
    }
    console.log(rectangles)
    for(let i = rectangles.length; i > 0; --i){
        const [height, start] = rectangles.pop()
        const area = (heights.length - start) * height
        maxArea = Math.max(area, maxArea);
    }
    return maxArea
};

// Given an array of heights
// where each element is a rectangle with the element's height and a width of 1

// Return area of largest rectangle in histogram

// Make a stack as you go left to right
// Initialize stack
    // stores element and starting index
// Initialize maxArea as 0

// Loop through all the elements
    // if stack empty
    // add value and index to stack

    // compare the current value to the top of the stack
    // if curr is greater than the top 
    // push it to the stack

    // if curr is equal
    // do not push it

    // while the curr is less than the stack
        // calculate the area of the rectangle from the top of the stack
        // reassign maxArea if need be
        // pop it from the stack
        // if it happens to be the only value in the stack keep its old index
    

// With the remaining stack determine the area for each section and compare to maxarea

// Return max area