function createDict(keys, values){
  const dict = {};
  for(let i = 0; i < keys.length; i++){
    dict[keys[i]] = values[i] ?? null;
  }
  return dict;
}