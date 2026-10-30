function reverseBits(n) {
  // num -> binary string
  let binary = n.toString(2);
  // binary string -> rev binary string
  let revBinary = '';
  for(let i = binary.length - 1; i >= 0; i--){
    revBinary += binary[i];
  }
  // rev binary string -> num
  return parseInt(revBinary, 2);
}