function productArray(numbers){
  // keep track of the progressive product moving from left to right
  const products = []
  let current = 1;
  for(const num of numbers){
    products.push(current);
    current *= num;
  }
  current = 1;
  const reverseProducts = [];
  for(let i = numbers.length - 1; i >= 0; i--){
    reverseProducts.push(current);
    current *= numbers[i];
  }
  // keep track of the progressive product moving from right to left
  // multiply both of the products at the position to get the actual product for each index
  const result = [];
  for(let i = 0; i < numbers.length; i++){
    result.push(products[i] * reverseProducts[numbers.length - 1 - i]);
  }
  // return the final product array
  return result;
}