function dropWhile(array, predicate) {
  // loop through array until you find the first index that makes the predicate false
  for(let i = 0; i < array.length; i++){
    if(!predicate(array[i])){
      return array.slice(i);
    }
  }
  // return a slice from that index to the end of the array
    // if the whole sequence passed return an empty array
  return [];
}