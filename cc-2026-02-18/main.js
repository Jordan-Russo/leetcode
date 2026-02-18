// given an array of integers
  // length >= 0
// return an integer representing the largest difference that can be made by subtracting the largest number by the smallest number
  // if length is <= 1, return 0
function maxDiff(list) {
  // edge case for invalid list lengths
  if(list.length <= 1){return 0}
  // find the largest number in the list
  const max = Math.max(...list);
  // find the smallest number in the list
  const min = Math.min(...list);
  // return the absolute difference between those two numbers
  return max - min;
};