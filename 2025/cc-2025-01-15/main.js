// url: https://leetcode.com/problems/design-an-atm-machine/submissions/1502341272/
// given an array of bank notes and withdraws
// return an object that models an ATM that is able to
// accept deposits of bank notes in the form of an array covering the following values
    // [20,50,100,200,500]
// return an array containing the amount of each type of bank note after a withdraw if possible, otherwise returns [-1]
    // will always try using biggest possible banknote first, if it fails return -1
// only update banknotes stock after verifying that a transaction can be done and doing it.
class ATM{
    constructor(){
        this.bankNoteQuantity = [0,0,0,0,0]
        this.bankNoteValues = [20,50,100,200,500]
    }
    deposit(bankNotes){
        for(let i = 0; i < bankNotes.length; i++){
            this.bankNoteQuantity[i] += bankNotes[i]
        }
    }
    withdraw(amount){
        const withdrawn = [0,0,0,0,0]
        for(let i = 4; i >= 0; i--){
            if(amount >= this.bankNoteValues[i] && this.bankNoteQuantity[i] > 0){
                const quantity = Math.min(Math.floor(amount / this.bankNoteValues[i]), this.bankNoteQuantity[i])
                withdrawn[i] += quantity
                amount -= this.bankNoteValues[i] * quantity
                this.bankNoteQuantity[i] -= quantity
            }
        }
        if(amount !== 0){
            for(let i = withdrawn.length - 1; i >= 0; i--){
                this.bankNoteQuantity[i] += withdrawn[i]
            }
            return [-1]
        }
        return withdrawn
    }
}
// Example 1:

// Input
// ["ATM", "deposit", "withdraw", "deposit", "withdraw", "withdraw"]
// [[], [[0,0,1,2,1]], [600], [[0,1,0,1,1]], [600], [550]]
// Output
// [null, null, [0,0,1,0,1], null, [-1], [0,1,0,0,1]]

// Explanation
// ATM atm = new ATM();
// atm.deposit([0,0,1,2,1]); // Deposits 1 $100 banknote, 2 $200 banknotes,
//                           // and 1 $500 banknote.
// atm.withdraw(600);        // Returns [0,0,1,0,1]. The machine uses 1 $100 banknote
//                           // and 1 $500 banknote. The banknotes left over in the
//                           // machine are [0,0,0,2,0].
// atm.deposit([0,1,0,1,1]); // Deposits 1 $50, $200, and $500 banknote.
//                           // The banknotes in the machine are now [0,1,0,3,1].
// atm.withdraw(600);        // Returns [-1]. The machine will try to use a $500 banknote
//                           // and then be unable to complete the remaining $100,
//                           // so the withdraw request will be rejected.
//                           // Since the request is rejected, the number of banknotes
//                           // in the machine is not modified.
// atm.withdraw(550);        // Returns [0,1,0,0,1]. The machine uses 1 $50 banknote
//                           // and 1 $500 banknote.