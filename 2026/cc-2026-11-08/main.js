function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  // create new node with the data
  const newHead = new Node(data);
  // set the next property of the new node to the head
  newHead.next = head;
  // return the new node
  return newHead;
}

function buildOneTwoThree() {
  let head = new Node(3);
  head = push(head, 2);
  head = push(head, 1);
  return head;
}