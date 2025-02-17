// url: https://www.youtube.com/watch?v=bjE9xmVk9zI
// given a array of the number of tickets people need to buy, and the index of our target, k
// return the amount of seconds it takes for the target, at index k to purchase all of their tickets
// Rules for purchasing tickets:
// people can only purchase one ticket at a time and then move into the back of the queue.
// purchasing a ticket takes 1 second
// the 0th index of the array, is the front of the line
// k is 0-indexed
/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
function timeRequiredToBuy(tickets, k){
  // initialize time
  let time = 0;

  // loop through every element
  for(let i = 0; i < tickets.length; i++){
      const curr = tickets[i];
      // if the index is <= k
      if(i <= k){
          // increase time by Min(tickets[k], tickets[i]);
          time += Math.min(tickets[k], curr);
      }
      // if the index is > k
      else{
          // increase time by Min(tickets[k] - 1, tickets[i])
          time += Math.min(tickets[k] - 1, curr);
      }
  }
  // return time
  return time;
};
// console.log(timeRequiredToBuy([2,3,2], 2), 6);
// console.log(timeRequiredToBuy([5,1,1,1], 0), 8);