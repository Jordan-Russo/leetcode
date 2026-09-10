function multiples(m, n){
  const result = [];
  let curr = 0;
  while(m > 0){
    const next = curr + n;
    result.push(next);
    curr = next;
    m--;
  }
  return result;
}