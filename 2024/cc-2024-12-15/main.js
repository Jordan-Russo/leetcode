// url: https://leetcode.com/problems/kth-distinct-string-in-an-array/

// given an array of strings
  // always an array, always passing in at least one string
    // string will always have at least one character in it (no empty strings)
// integer, k
  // always going to be at least 0

// return the kth distinct string from the array
// if kth distinct number doesn't exist in the array, return empty string instead, ''
// distinct string does not have any duplicates in the array
// so exclude any elements that contain duplicates (they aren't valid distinct strings)

function kthDistinct(arr, k){
  // loop through all the string elements in the array
  let frequencyCache = {}
  for(const string of arr){
    frequencyCache[string] = frequencyCache[string] + 1 || 1
  }
  // frequency cache (stores found strings in order and frequency)
  for(const string in frequencyCache){
    if(frequencyCache[string] === 1){
      if(k === 1){return string}
      k--
    }
  }
  return ''
  // loop through the frequency cache looking for distinct strings (having a frequency of 1)
  // return the kth found one || ''  
}

// console.log(kthDistinct(["d","b","c","b","c","a"], 2), 'a')
// console.log(kthDistinct(["aaa","aa","a"], 1), 'aaa')
// console.log(kthDistinct(["a","b","a"], 3), '')