function arithmeticSequenceElements(a, d, n) {
  const values = [];
	let curr = a;
  while(n > 0){
    values.push(curr);
    curr += d;
    n--;
  }
  return values.join(', ');
}