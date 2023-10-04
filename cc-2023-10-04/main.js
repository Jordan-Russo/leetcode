// url: https://leetcode.com/problems/convert-the-temperature/

// Given non-negative floating point number to 2 decimal places in Celsius

// Return the temperature as an array of [kelvin, fahrenheit]

// Example 1:
// Input: celsius = 36.50
// Output: [309.65000,97.70000]
// Explanation: Temperature at 36.50 Celsius converted in Kelvin is 309.65 and converted in Fahrenheit is 97.70.

// Example 2:
// Input: celsius = 122.11
// Output: [395.26000,251.79800]
// Explanation: Temperature at 122.11 Celsius converted in Kelvin is 395.26 and converted in Fahrenheit is 251.798.

// Conversion formulas
// Kelvin = Celsius + 273.15
// Fahrenheit = Celsius * 1.80 + 32.00

// Take in celsius

// transform value to both kelvin and fahrenheit

// return an array containing both of those kelvin and fahrenheit values



/**
 * @param {number} celsius
 * @return {number[]}
 */
function convertTemperature(celsius) {
    const kelvin = celsius + 273.15;
    const fahreheit = celsius * 1.8 + 32;
    return [kelvin, fahreheit];    
};