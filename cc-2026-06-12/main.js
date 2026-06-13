function one(arr, fun) {
  let count = 0;
  for(const num of arr){
    if(fun(num)){count++}
    if(count > 1){return false}
  }
  return count === 1;
}