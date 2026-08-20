function jumpingNumber(n){
  const stringN = n.toString();
  for(let i = 1; i < stringN.length; i++){
    const prev = stringN[i - 1];
    const curr = stringN[i];
    const difference = Math.abs(Number(prev) - Number(curr));
    if(difference !== 1){return 'Not!!'}
  }
  return 'Jumping!!';
}