function maxProduct(numbers, size){
  const factors = [...numbers].sort((a,b) => b - a).slice(0, size);
  const product = factors.reduce((acc, c) => acc * c, 1);
  return product;
}