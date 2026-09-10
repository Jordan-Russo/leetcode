const data = '119-210,907313-1048019,7272640820-7272795557,6315717352-6315818282,42-65,2234869-2439411,1474-2883,33023-53147,1-15,6151-14081,3068-5955,65808-128089,518490556-518593948,3535333552-3535383752,7340190-7548414,547-889,34283147-34389716,44361695-44519217,607492-669180,7071078-7183353,67-115,969-1469,3636264326-3636424525,762682710-762831570,827113-906870,205757-331544,290-523,86343460-86510016,5536957-5589517,132876-197570,676083-793651,23-41,17920-31734,440069-593347'
const data2 = '11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124'
// given an input string of product id ranges
   // structure is lowernumber-highernumber,anotherlowernumber-anotherhighernumber,... etc
// return the sum of all the invalid product id
// invalid product ids have either
  // a leading zero
  // the first half of the number is equal to the second half of the number
function invalidProductIdSum(productIdData){
  let sum = 0;
  // split the ranges into each individual range
  const productIdRanges = productIdData.split(',');
  // loop through each individual range
  for(let i = 0; i < productIdRanges.length; i++){
    const [min,max] = productIdRanges[i].split('-').map(Number);
    for(let j = min; j <= max; j++){
      let curr = j;
      const digits = [];
      while(curr > 0){
        const digit = curr % 10;
        digits.push(digit);
        curr = Math.trunc(curr / 10);
      }
      // determine for each value in that range inclusive whether or not it's invalid
      // if it's invalid add it to the sum
      // inorder for it to be repeating it must have an even # of digits and the left split sequence is equal to the right split sequence
      if(digits.length % 2 === 1){
        continue;
      }
      const half = digits.length / 2;
      let isValid = false;
      for(let k = 0; k < half; k++){
        isValid = digits[k] !== digits[k + half];
        if(isValid){
          break;
        }
      }
      if(!isValid){
        sum += j;
      }
    }
  }
  // return the sum
  return sum;
}
console.log(invalidProductIdSumPart1(data), invalidProductIdSumPart1(data2));
function invalidProductIdSumPart2(productIdData){
  let sum = 0;
  // split the ranges into each individual range
  const productIdRanges = productIdData.split(',');
  // loop through each individual range
  for(let i = 0; i < productIdRanges.length; i++){
    const [min,max] = productIdRanges[i].split('-').map(Number);
    for(let j = min; j <= max; j++){
      let curr = String(j);
      // loop through at each length starting at 1 and stopping after going past half the string length
      const half = curr.length / 2;
      // for each interval length
      for(let k = 1; k <= half; k++){
        // find first segment pattern
        const pattern = curr.slice(0, k);
        // compare it to the other segment patterns
        // set flag for a sequence
        let hasSequence = true;
        for(let start = k; start < curr.length; start += k){
          const segment = curr.slice(start, start + k);
          if(segment !== pattern){
            hasSequence = false;
            break;
          }
        }
        if(hasSequence){
          sum += j;
          break;
        }
      }
    }
  }
  // return the sum
  return sum;
}
console.log(invalidProductIdSumPart2(data), invalidProductIdSumPart2(data2));