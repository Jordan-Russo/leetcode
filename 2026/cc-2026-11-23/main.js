function solve(n) {
  if(n % 10){return -1}
  let billCount = 0;
  const bills = [10,20,50,100,200,500];
  for(let i = bills.length - 1; i >= 0; i--){
    const bill = bills[i];
    while(bill <= n){
      n -= bill;
      billCount++;
    }
  }
  return billCount;
}