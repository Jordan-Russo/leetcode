function solve(st, a, b){
  b = Math.min(b, st.length - 1);
  let revSubstring = '';
  for(let i = b; i >= a; i--){
    revSubstring += st[i];
  }
  return st.slice(0, a) + revSubstring + st.slice(b + 1);
}