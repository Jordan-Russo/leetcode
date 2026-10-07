function doubleEveryOther(a) {
  return a.map((x, i) => (i & 1) ? x + x : x);
}