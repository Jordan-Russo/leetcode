function findQuarterNotes(timeSignature) {
  const [numerator, denominator] = timeSignature.split('/').map(Number);
  if(!Number.isInteger(Math.log2(denominator))){
    return null;
  }
  return Math.trunc(4 * numerator / denominator);
}