function consecutive(arr, a, b) {
  return arr.some((num, i, numArr) => {
    const prev = numArr[i - 1];
    if(num === a && prev === b || num === b && prev === a){return true}
  })
}