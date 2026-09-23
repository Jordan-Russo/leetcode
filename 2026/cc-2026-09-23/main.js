function extraPerfect(n){
  let extraPerfectNumbers = [];
  for(let i = 1; i <= n; i++){
    const bitString = i.toString(2);
    const isExtraPerfect = bitString[0] === '1' && bitString.at(-1) === '1';
    if(isExtraPerfect){extraPerfectNumbers.push(i)}
  }
  return extraPerfectNumbers;
}