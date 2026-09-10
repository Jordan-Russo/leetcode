/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const visited = new Set([source]);
    const paths = {};
    let hasValidPath = false;
    for(const [start, end] of edges){
        paths[start] ??= [];
        paths[start].push(end);
        paths[end] ??= [];
        paths[end].push(start);
    }
    recursiveSearch(source);
    return hasValidPath;
    function recursiveSearch(current){
        if(current === destination){
            hasValidPath = true;
            return true;
        }
        for(const next of (paths[current] || [])){
            if(hasValidPath){break}
            if(visited.has(next)){continue}
            visited.add(next);
            recursiveSearch(next);
        }
        if(hasValidPath){return true}
    }
};