function validateWord(s)
{
  // modify s to be in lowercase
  s = s.toLowerCase();
  // create a frequency cache and loop through the modified s to fill it
  const freqCache = {};
  for(const char of s){
    freqCache[char] ??= 0;
    freqCache[char]++;
  }
  // return whether every value of each key in the cache is the same or not
  const values = Object.values(freqCache);
  for(let i = 1; i < values.length; i++){
    const curr = values[i];
    const prev = values[i - 1];
    if(curr !== prev){return false}
  }
  return true;
}