// given a string that has any characters of any length
// return an object that contains each of the characters and the frequency they occur in
  // case sensitive
  // the frequency is stored as a value with the character as a string
  // these frequency are positive integers

function characterCache(string){
  // initialize an object literal
  const cache = {};
// loop through the string
  for(let character of string){
      // check if the character is in the object
    // if so increment its frequency by 1
    // if not initialize it with a value of 1
    cache[character] = cache[character] + 1 || 1;
// return the frequency cache object
  }
  return cache;
}

// 'aba' -> {a: 2, b: 1}
console.log(characterCache('aba'), {a:2, b: 1});
// 'hello bob' -> {h: 1, e: 1, l: 2, o: 2, ' ': 1, b: 2}
console.log(characterCache('hello bob'), {h: 1, e: 1, l: 2, o: 2, ' ': 1, b: 2});
// 'BIG BoOm!' -> {B: 2, I: 1, G: 1, ' ': 1, o: 1, O: 1, m: 1, '!': 1}
console.log(characterCache('BIG BoOm!'), {B: 2, I: 1, G: 1, ' ': 1, o: 1, O: 1, m: 1, '!': 1});