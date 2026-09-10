// url: https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
// given an integer array
// return a new array that are after adding discounts
// discount chosen will be the first value after an element that is less than or equal to it if it exists, otherwise there is no discount.
/**
 * @param {number[]} prices
 * @return {number[]}
 */
function finalPrices(prices){
    // create new array
    // loop through array
        // for each element, find the next value that is equal to or less than to it
        // subtract the element by the found value, don't subrract if not found
        // push discounted element price into the new array
    // return the new array
    return prices.map((price, i) => {
        const discount = prices.find((value, j) => j > i && value <= price);
        if(discount === undefined){return price;}
        return price - discount;
    })
};
// console.log(finalPrices([8,4,6,2,3]), [4,2,4,2,3]);
// console.log(finalPrices([1,2,3,4,5]), [1,2,3,4,5]);
// console.log(finalPrices([10,1,1,6]), [9,0,1,6]);