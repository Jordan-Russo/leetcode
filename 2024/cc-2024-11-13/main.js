// url: https://leetcode.com/problems/design-an-ordered-stream/

class OrderedStream{
  constructor(){
    this.position = 1
    this.data = new Map()
  }
  insert(idKey, value){
    let result = []
    this.data.set(idKey, value)
    if(idKey === this.position){
        do{
            result.push(this.data.get(this.position))
            this.position++
        }while(this.data.has(this.position))
    }
    return result
  }
}