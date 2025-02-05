// url: https://leetcode.com/problems/simple-bank-system/
// given a 0-indexed integer array create a Bank Class
// its methods will only work when referencing valid account numbers and amounts moved are actually available
    // transfer: given two accounts and an amount, if possible move specified amount from account 1 to account 2.
    // deposit: given an account and an amount, add the amount to the accounts balance if possible.
    // withdraw: given an account and an amount, remove the amount from the account balance if possible.
// if any of these methods are not possible return false
// otherwise return true
/**
 * @param {number[]} balance
 */
class Bank{
    constructor(balance){
        this.balance = balance;
    }
    /** 
    * @param {number} account1 
    * @param {number} account2 
    * @param {number} money
    * @return {boolean}
    */
    transfer(account1, account2, money) {
        account1--;
        account2--;
        if(account1 in this.balance === false || account2 in this.balance === false){return false;}
        if(this.balance[account1] < money){return false;}
        this.balance[account1] -= money;
        this.balance[account2] += money;
        return true;
    };
    /** 
    * @param {number} account 
    * @param {number} money
    * @return {boolean}
    */
    deposit(account, money){
        account--;
        if(account in this.balance === false){return false;}
        this.balance[account] += money;
        return true;
    };
    /** 
    * @param {number} account 
    * @param {number} money
    * @return {boolean}
    */
    withdraw(account, money){
        account--;
        if(account in this.balance === false){return false;}
        if(this.balance[account] < money){return false;}
        this.balance[account] -= money;
        return true;
    };
}
/** 
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */
// Example 1:

// Input
// ["Bank", "withdraw", "transfer", "deposit", "transfer", "withdraw"]
// [[[10, 100, 20, 50, 30]], [3, 10], [5, 1, 20], [5, 20], [3, 4, 15], [10, 50]]
// Output
// [null, true, true, true, false, false]

// Explanation
// Bank bank = new Bank([10, 100, 20, 50, 30]);
// bank.withdraw(3, 10);    // return true, account 3 has a balance of $20, so it is valid to withdraw $10.
//                          // Account 3 has $20 - $10 = $10.
// bank.transfer(5, 1, 20); // return true, account 5 has a balance of $30, so it is valid to transfer $20.
//                          // Account 5 has $30 - $20 = $10, and account 1 has $10 + $20 = $30.
// bank.deposit(5, 20);     // return true, it is valid to deposit $20 to account 5.
//                          // Account 5 has $10 + $20 = $30.
// bank.transfer(3, 4, 15); // return false, the current balance of account 3 is $10,
//                          // so it is invalid to transfer $15 from it.
// bank.withdraw(10, 50);   // return false, it is invalid because account 10 does not exist.