function collatz(n) {
  let size = 1;
  while(n !== 1){
    const isOdd = n & 1;
    n = (isOdd ? n * 3 + 1 : n / 2);
    size++;
  }
  return size;
}