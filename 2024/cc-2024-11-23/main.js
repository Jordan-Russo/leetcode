// url: https://leetcode.com/problems/account-balance-after-rounded-purchase/

/**
 * @param {number} purchaseAmount
 * @return {number}
 */

// Given a integer that represents a purchase amount

// Round that purchase to the nearest 10 dollars and subtract it from the 100 dollars that you are given

// Return an integer that is the rounded remaining balance

// function accountBalanceAfterPurchase(purchaseAmount){
//   const roundedPurchaseAmount = Math.round(purchaseAmount / 10) * 10
//   const remainingBalance = 100 - roundedPurchaseAmount
//   return remainingBalance
// }

const accountBalanceAfterPurchase = purchaseAmount => 100 - 10 * Math.round(purchaseAmount / 10)

// console.log(accountBalanceAfterPurchase(9), 90)
// console.log(accountBalanceAfterPurchase(15), 80)
// console.log(accountBalanceAfterPurchase(10), 90)