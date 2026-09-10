function wrappingPaper(boxes){
  let total = 0;
  for(const [l,w,h] of boxes){
    const areaA = l*w;
    const areaB = l*h;
    const areaC = w*h;
    const min = Math.min(areaA, areaB, areaC);
    total += 2*areaA + 2*areaB + 2*areaC + min;
  }
  return total;
}