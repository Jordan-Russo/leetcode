function bingo(a) {
  // B -> 2, G -> 7, I -> 9, N -> 14, O -> 15
  const seen = new Set(a);
  const hasBingo = seen.has(2) && seen.has(7) && seen.has(9) && seen.has(14) && seen.has(15)
  return hasBingo ? "WIN" : "LOSE";
}