function catchSignChange(arr) {
  if(arr.length === 0){return 0}
  let signChangeCount = 0;
  let currentSign = getSign(arr[0]);
  for(let i = 1; i < arr.length; i++){
    if(currentSign !== getSign(arr[i])){
      signChangeCount++;
      currentSign = getSign(arr[i]);
    }
  }
  return signChangeCount;
}
function getSign(num){
  return num >= 0 ? 1 : 0;
}