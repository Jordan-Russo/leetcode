function maxRot(n){
  const stringN = n.toString();
  let previousString = stringN;
  let max = n;
  for(let i = 0; i < stringN.length; i++){
    const newString = previousString.slice(0, i) + previousString.slice(i + 1) + previousString[i];
    max = Math.max(max, Number(newString));
    previousString = newString;
  }
  return max;
}