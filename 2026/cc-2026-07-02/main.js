function solution(pairs){
  // object entries to get both key and value pair
  const data = Object.entries(pairs);
  // a map to use both values and convert it into [key] = [value] string format
  const entries = data.map(([key, value]) => `${key} = ${value}`);
  // join method with a ',' delimiter to turn it into its final format
  return entries.join(',');
}