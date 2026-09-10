function stringify(list) {
  let curr = list;
  const arr = [];
  while(curr){
    arr.push(curr.data);
    curr = curr.next;
  }
  arr.push("null");
  return arr.join(' -> ');
}