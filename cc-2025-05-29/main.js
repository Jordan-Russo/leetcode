// url: https://leetcode.com/problems/image-smoother/
// given a m x n grid of non-negative integers
// return a m x n grid after applying a smoothing algorithm over all the points
    // for each element, take the rounded down average of up to all 8 surrounding elements and make it the new value
/**
 * @param {number[][]} img
 * @return {number[][]}
 */
function imageSmoother(img){
    const smoothImage = [];
    for(let row = 0; row < img.length; row++){
        const smoothRow = [];
        for(let col = 0; col < img[row].length; col++){
            // make function call, pass the img, the row, and the column
            smoothRow.push(smoothAverage(img, row, col));
        }
        smoothImage.push(smoothRow);
    }
    return smoothImage;
};
function smoothAverage(img, row, col){
    let averageCount = 1;
    let sum = img[row][col];
    const hasTop = row - 1 >= 0;
    const hasBottom = row + 1 < img.length;
    const hasLeft = 0 <= col - 1;
    const hasRight = col + 1 < img[row].length;
    if(hasTop){
        averageCount++;
        sum += img[row - 1][col];
    }
    if(hasBottom){
        averageCount++;
        sum += img[row + 1][col];
    }
    if(hasLeft){
        averageCount++;
        sum += img[row][col - 1];
    }
    if(hasRight){
        averageCount++;
        sum += img[row][col + 1];
    }
    // top left
    if(hasLeft && hasTop){
        averageCount++;
        sum += img[row - 1][col - 1];
    }
    // top right
    if(hasRight && hasTop){
        averageCount++;
        sum += img[row - 1][col + 1];
    }
    // bottom left
    if(hasLeft && hasBottom){
        averageCount++;
        sum += img[row + 1][col - 1];
    }
    // bottom right
    if(hasRight && hasBottom){
        averageCount++;
        sum += img[row + 1][col + 1];
    }
    return Math.floor(sum / averageCount);
};

// console.log(imageSmoother([[1,1,1],[1,0,1],[1,1,1]]), [[0,0,0],[0,0,0],[0,0,0]]);
// console.log(imageSmoother([[100,200,100],[200,50,200],[100,200,100]]), [[137,141,137],[141,138,141],[137,141,137]]);