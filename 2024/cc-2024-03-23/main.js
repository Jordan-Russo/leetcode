// url: https://leetcode.com/problems/bulls-and-cows/description/
// You are playing the Bulls and Cows game with your friend.

// You write down a secret number and ask your friend to guess what the number is. When your friend makes a guess, you provide a hint with the following info:

// The number of "bulls", which are digits in the guess that are in the correct position.
// The number of "cows", which are digits in the guess that are in your secret number but are located in the wrong position. Specifically, the non-bull digits in the guess that could be rearranged such that they become bulls.
// Given the secret number secret and your friend's guess guess, return the hint for your friend's guess.

// The hint should be formatted as "xAyB", where x is the number of bulls and y is the number of cows. Note that both secret and guess may contain duplicate digits.

 

// Example 1:

// Input: secret = "1807", guess = "7810"
// Output: "1A3B"
// Explanation: Bulls are connected with a '|' and cows are underlined:
// "1807"
//   |
// "7810"
// Example 2:

// Input: secret = "1123", guess = "0111"
// Output: "1A1B"
// Explanation: Bulls are connected with a '|' and cows are underlined:
// "1123"        "1123"
//   |      or     |
// "0111"        "0111"
// Note that only one of the two unmatched 1s is counted as a cow since the non-bull digits can only be rearranged to allow one 1 to be a bull.
 

// Constraints:

// 1 <= secret.length, guess.length <= 1000
// secret.length == guess.length
// secret and guess consist of digits only.
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    // hint is xAyB
        // x is number of perfect matches
        // y is number of wrong position but correct numbers
    const unpairedCharacter = {}
    let perfectMatches = 0
    let partialMatches = 0
    // intialize cache that's used to store unmatched secret string characters
    // intialize perfectMatches and partialMatches at 0
    for(let i = 0; i < secret.length; i++){
        const secretCharacter = secret[i]
        const guessCharacter = guess[i]
        if(secretCharacter === guessCharacter){
            perfectMatches++
        }else{
            unpairedCharacter[secretCharacter] ??= 0
            unpairedCharacter[secretCharacter]++
        }
    }
    for(let i = 0; i < secret.length; i++){
        const secretCharacter = secret[i]
        const guessCharacter = guess[i]
        if(secretCharacter !== guessCharacter && unpairedCharacter[guessCharacter]){
            partialMatches++
            unpairedCharacter[guessCharacter]--
        }
    }
    // loop through both strings
        // compare the character at both strings
            // if the same increment perfect matches
            // if not cache the character of the secret str
    // loop through both strings
        // compare the character at both strings
            // if the guess isn't the same for a char but the cache has a spare
                // increment partialMatches
    return `${perfectMatches}A${partialMatches}B`
    // return the hint string by interpolating perfect and partial matches
        // `${perfectMatches}A${partialMatches}B`
};