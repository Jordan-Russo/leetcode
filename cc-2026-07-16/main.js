function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let dayCount = 0;
  let height = 0;
  while(height < desiredHeight){
    dayCount++;
    height += upSpeed
    if(height >= desiredHeight){return dayCount}
    height -= downSpeed;
  }
  return dayCount;
}