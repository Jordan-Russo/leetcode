function pofi(n){
  return ['i', '-1', '-i', '1'][(n - 1 + 4) % 4];
}