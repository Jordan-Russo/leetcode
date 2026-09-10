// Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

// Please implement encode and decode

// Example1:
// Input: ["lint","code","love","you"]
// Output: ["lint","code","love","you"]
// Explanation:
// One possible encode method is: "lint:;code:;love:;you"

// Example2:
// Input: ["we", "say", ":", "yes"]
// Output: ["we", "say", ":", "yes"]
// Explanation:
// One possible encode method is: "we:;say:;:::;yes"

// For each string, have a delimiter and before it, say how long the word will be.
// i.e. 4_cool5_great

// once we have this string we search for the delimiter starting at a position of 0.
// if it doesn't exist assign the position to be at the array
// reassign the position to be 

function encode(strs){
    return strs.reduce((a,c) => a + `${c.length}#${c}`,'');
  }
  
  function decode(str){
    const strs = [];
    let pos = 0;
    while(pos < str.length){
      // find the delimiter
      let delimiterIndex = str.indexOf('#', pos);
      if(delimiterIndex === -1){
        delimiterIndex = str.length;
      }
      let length = parseInt(str.slice(pos, delimiterIndex), 10);
      let text = str.slice(delimiterIndex + 1, delimiterIndex + 1 + length);
      strs.push(text);
      pos = delimiterIndex + 1 + length
    }
    return strs;
  }
  
  console.log(decode(encode(["lint","code","love","you"])), ["lint","code","love","you"]);
  console.log(decode(encode(["we", "say", ":", "yes"])), ["we", "say", ":", "yes"]);