function polygonArea(A,B,C,D){
  const squareArea = A * B;
  const triangleArea = 0.5 * (C - A) * B;
  return squareArea + triangleArea;
}