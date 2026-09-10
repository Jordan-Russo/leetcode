// Given an array of strings
// Create a function that takes that array of strings and for each, returns a new array that starts off by returning true for each item in the list
// if one of the elements is the string 'flick', that element along with all the others will have their boolean changed.
// examples: 
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]
// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]
// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
function flickSwitch(arr){
  let flag = true
  return arr.reduce((acc,c) => {
    if(c === 'flick'){
      flag = !flag
    }
    acc.push(flag)
    return acc
  }, [])
}