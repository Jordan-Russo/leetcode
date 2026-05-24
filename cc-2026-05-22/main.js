function splitTheBill(x) {
  let sum = 0;
  let count = 0;
  for(const key in x){
    sum += x[key];
    count++;
  }
  const average = sum / count;
  const refunds = {};
  for(const key in x){
    refunds[key] = x[key] - average;
  }
  return refunds;
}