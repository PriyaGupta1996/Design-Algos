//https://leetcode.com/problems/longest-absolute-file-path/description/?envType=problem-list-v2&envId=ww61wmkv


//Really good question. 
// Learning - No need to create tree. Only need to keep track of the length of the path at each level.
// push and pop rightly. 
// /t is for knowing depth and is a single character.


/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    const paths = input.split("\n");
    const stack =[];
    stack.push(0);
    let longestPath =0; 

    for(let i =0;i<paths.length;i++){
        const path = paths[i];
        let depth =0;
        while(path[depth]==='\t') {
            depth++;
        }
        let valuesToPop = stack.length-depth-1;
        while(valuesToPop>0){
            stack.pop();
            valuesToPop--;
        }
        const name = path.slice(depth);
        const maxLengthLocal = name.length + stack[stack.length-1];
        if(name.includes('.')){
            longestPath = Math.max(longestPath,maxLengthLocal);
            stack.push(maxLengthLocal);
        }else{
            stack.push(maxLengthLocal+1);
        }
    }
    return longestPath;
};
