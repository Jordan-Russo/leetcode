/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // create the matrix
    const matrix = [];
    for(let i = 0; i < numRows; i++){
        matrix.push([]);
    }
    let height = 0;
    let distance = 0;
    let isRising = true;
    for(const char of s){
        // assign the char
        matrix[height][distance] = char;
        // decide whether you're changing directions
        // make an exclusive case for numsRows 1
        if(numRows === 1){
            distance++;
        }else{
            // height being 0
            if(height === 0){
                height++;
                isRising = true;
            }
            // height being numRows - 1
            else if(height === numRows - 1){
                height--;
                distance++;
                isRising = false;
            }
            // height being neither
            else{
                if(isRising){
                    height++;
                }else{
                    height--;
                    distance++;
                }
            }
        }
    }
    // loop through it and construct the string
    let resultString = '';
    for(const row of matrix){
        for(const char of row){
            const isValid = Boolean(char);
            if(isValid){resultString += char}
        }
    }
    return resultString;
};