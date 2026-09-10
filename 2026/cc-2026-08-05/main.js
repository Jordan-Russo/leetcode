function specialNumber(n){
  const stringDigits = n.toString();
  for(const stringNum of stringDigits){
    if(stringNum > '5'){return 'NOT!!'}
  }
  return 'Special!!';
}