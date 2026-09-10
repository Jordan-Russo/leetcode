// url: https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/description/

/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */

// Given an array of strings words and a string s, determine if s is an acronym of words.

// The string s is considered an acronym of words if it can be formed by concatenating the first character of each string in words in order. For example, "ab" can be formed from ["apple", "banana"], but it can't be formed from ["bear", "aardvark"].

// Return true if s is an acronym of words, and false otherwise.

// Input: words = ["alice","bob","charlie"], s = "abc"
// Output: true

// Input: words = ["an","apple"], s = "a"
// Output: false

// Input: words = ["never","gonna","give","up","on","you"], s = "ngguoy"
// Output: true

// Given an array of words, always going to be string, never empty, lower case only, english characterse only, no spaces

// Given a string that is lowercase as well

// return true/false whether each of the first characters in each word of the array would become the string if they were concatenated together


function isAcronym(words, acronym){
    if(words.length !== acronym.length){return false}
    for(let i = 0; i < words.length; i++){
      if(!words[i].startsWith(acronym[i])){return false}
    }
    return true
  }
  
  console.log(isAcronym(['alice', 'bob', 'charlie'], 'abc'), true)
  console.log(isAcronym(['an', 'apple'], 'a'), false)
  console.log(isAcronym(['never', 'gonna', 'give', 'up', 'on', 'you'], 'ngguoy'), true)