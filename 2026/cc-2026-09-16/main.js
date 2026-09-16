function maxGap (numbers){
  let max = 0;
  const sorted = [...numbers].sort((a,b) => a - b);
  for(let i = 1; i < sorted.length; i++){
    const prev = sorted[i - 1];
    const curr = sorted[i];
    const gap = curr - prev;
    max = Math.max(max, gap);
  }
  return max;
}