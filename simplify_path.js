//https://leetcode.com/problems/simplify-path/description/?envType=problem-list-v2&envId=ww61wmkv


/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const trimPath = path.trim();
    const locs = trimPath.split("/");
    const stack  =[];
    for(let i=0;i<locs.length;i++){
        const loc = locs[i];
        if(loc==="" || loc===".") continue;
        if(loc==="..") {
            stack.pop()
        }
        else stack.push(loc);
    }
    // for(let i=0;i<stack.length-1;i++){
    //     finalPath+=stack[i]+"/";
    // }
    // if(stack.length>0)
    //     finalPath+=stack[stack.length-1];
    return "/" + stack.join("/"); // this is important and much cleaner.
    
};