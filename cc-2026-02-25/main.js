function menFromBoys(arr){
  // a sorting function that works on numbers
  return [...new Set(arr)].sort((a,b) => {
    const aIsOdd = a & 1;
    const bIsOdd = b & 1;
    // sort even numbers as first over odds
    if(!bIsOdd && aIsOdd){
      return 1;
    }else if(bIsOdd && !aIsOdd){
      return -1;
    }else if(bIsOdd && aIsOdd){
      // for odd numbers, sort them descending order
      return b - a;
    }else{
      // for even numbers, sort them ascending order
      return a - b;
    }
  })
}