function elevatorDistance(array) {
  let distance = 0;
  for(let i = 1; i < array.length; i++){
    const prev = array[i - 1];
    const curr = array[i];
    distance += Math.abs(curr - prev);
  }
  return distance;
}