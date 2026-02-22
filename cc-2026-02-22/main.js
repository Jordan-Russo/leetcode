function potatoes(p0, w0, p1) {
  const initialWaterWeight = p0/100 * w0;
  // find the amount of water reduced
  const dryWeight = w0 - initialWaterWeight;
  // with the dry weight use the new water % as a ratio to calculate the total weight
  return Math.trunc(dryWeight * (100 / (100 - p1)) + 0.0000001);
  // minium value constant added to handle rounding floating point errors when dividing
  // i.e. 0.1 + 0.2 !== 0.3
}