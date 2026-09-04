function calculate(...setOne) {
  return (...setTwo) => setOne.reduce((acc, c) => acc + c, 0) + setTwo.reduce((acc, c) => acc + c, 0);
}