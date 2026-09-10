var palindromeChainLength = function(n) {
  if(isPalindromeNumber(n)){return 0}
  let stepCounter = 0;
  while(n <= Number.MAX_SAFE_INTEGER){
    stepCounter++;
    n += +n.toString().split('').reverse().join('');
    if(isPalindromeNumber(n)){
      return stepCounter;
    }
    console.log(n);
  }
};
function isPalindromeNumber(n){
  const numString = n.toString();
  for(let i = 0; i < numString.length / 2; i++){
    if(numString[i] !== numString[numString.length - 1 - i]){
      return false
    }
  }
  return true;
}