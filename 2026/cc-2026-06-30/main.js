function sumOfN(n) {
  const negativeFlag = n < 0;
  let result = [];
  const limit = Math.abs(n);
  for(let i = 0; i <= limit; i++){
    const prev = result.at(-1) || 0;
    const curr = prev + (negativeFlag ? -i : i);
    result.push(curr);
  }
  return result;
}