function average(scores) {
  const sum = scores.reduce((acc, c) => acc + c, 0);
  return Math.round(sum / scores.length);
}