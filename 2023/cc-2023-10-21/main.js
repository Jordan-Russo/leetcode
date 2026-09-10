// url: https://leetcode.com/problems/categorize-box-according-to-criteria/

// Given length, width, height, and mass as integers

// Determine whether it's bulky and/or heavy
// Return its state

// Conditions:
// Box is bulky if any dimensions are greater than 10^4
    // or volume is greater than 10^9

// Box is heavy if mass is greater or equal to 100

// If box is both bulky and heavy return "Both" as category
// If neither return "Neither"
// otherwise return "Bulky" or "Heavy"

// Example 1:

// Input: length = 1000, width = 35, height = 700, mass = 300
// Output: "Heavy"
// Explanation: 
// None of the dimensions of the box is greater or equal to 104. 
// Its volume = 24500000 <= 109. So it cannot be categorized as "Bulky".
// However mass >= 100, so the box is "Heavy".
// Since the box is not "Bulky" but "Heavy", we return "Heavy".
// Example 2:

// Input: length = 200, width = 50, height = 800, mass = 50
// Output: "Neither"
// Explanation: 
// None of the dimensions of the box is greater or equal to 104.
// Its volume = 8 * 106 <= 109. So it cannot be categorized as "Bulky".
// Its mass is also less than 100, so it cannot be categorized as "Heavy" either. 
// Since its neither of the two above categories, we return "Neither".

var categorizeBox = function(length, width, height, mass) {
    // check if heavy
    // check if bulky
    // if bulky and heavy return both
    // if bulky or heavy return which onever one
    // if neither return neither
    const isHeavy = mass > 100;
    const isBulky = Math.max(length, width, height) > 1e4 || length * width * height > 1e9;
    // if(isBulky && isHeavy){
    //     return "Both";
    // }else if(isBulky || isHeavy){
    //     return isBulky ? "Bulky" : "Heavy"
    // }else{
    //     return "Neither";
    // }
    switch(true){
        case isBulky && isHeavy: return 'Both';
        case isBulky: return 'Bulky';
        case isHeavy: return 'Heavy';
        default: return 'Neither';
    }
};