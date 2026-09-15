var paintLetterboxes = function(start, end) {
  const digitsArray = new Array(10).fill(0);
  while(start <= end){
    const digits = [...start.toString()];
    digits.forEach(digit => digitsArray[digit]++);
    start++;
  }
  return digitsArray
}