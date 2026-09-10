// url: https://leetcode.com/problems/find-center-of-star-graph/
// given an 2D integer array of edges between points
// return the center node in the graph that connects to all other nodes
// all the other nodes will always only connect to the center node
/**
 * @param {number[][]} edges
 * @return {number}
 */
function findCenter(edges){
    const potentialNodes = edges[0]
    // since all the edges are going to be to the center, the center can be found within every edge
    for(const node of edges[1]){
        // compare the first two edges to find the node they have in common and return it
        if(potentialNodes.includes(node)){
            return node
        }
    }
};
// console.log(findCenter([[1,2], [2,3], [4,2]]), 2)
// console.log(findCenter([[1,2], [5,1], [1,3], [1,4]]), 1)