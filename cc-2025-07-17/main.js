/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    const totalApples = apple.reduce((acc, c) => acc + c, 0);
    let size = 0;
    let boxCount = 0;
    const boxes = capacity.sort((a,b) => b - a);
    for(const box of boxes){
        size += box;
        boxCount++;
        if(size >= totalApples){return boxCount}
    }
};