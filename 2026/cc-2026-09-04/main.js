function bubblesortOnce([...a]) {
  for(let i = 1; i < a.length; i++){
    const prev = a[i - 1];
    const curr = a[i];
    if(prev > curr){
      a[i] = prev;
      a[i - 1] = curr;
    }
  }
  return a;
}