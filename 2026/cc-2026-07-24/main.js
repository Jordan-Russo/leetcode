function capitalize(string, indices) {
  const targets = new Set(indices);
  let result = '';
  for(let i = 0; i < string.length; i++){
    result += targets.has(i) ? string[i].toUpperCase() : string[i];
  }
  return result;
}