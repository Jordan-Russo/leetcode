function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  let nextNode = node;
  while(index > 0 && nextNode){
    nextNode = nextNode.next;
    index--;
  }
  if(!nextNode){
    throw new Error('invalid node')
  }
  return nextNode
}