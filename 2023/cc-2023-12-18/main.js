// Given 2 sorted arrays
// Return a single merged sorted array that doesn't have any duplicates
function mergeArrays(leftArr, rightArr) {
    let leftPos = 0
    let rightPos = 0
    const result = []
    while(leftPos < leftArr.length || rightPos < rightArr.length){
      if(rightArr[rightPos] === undefined || leftArr[leftPos] < rightArr[rightPos]){
        if(result.at(-1) !== leftArr[leftPos] ){
          result.push(leftArr[leftPos])
        }
        leftPos++
      }else{
        if(result.at(-1) !== rightArr[rightPos]){
          result.push(rightArr[rightPos])
        }
        rightPos++
      }
    }
    return result
  }
  