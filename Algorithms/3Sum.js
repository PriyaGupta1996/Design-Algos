//https://leetcode.com/problems/3sum/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const copy = nums.sort((a,b)=>a-b);
    let n = nums.length;
    const result =[];
    for(let i=0;i<n;i++){
        const first = copy[i]
        let p1 = i+1;
        let p2 = n-1;
        if( i>0 && copy[i]===copy[i-1]) continue;
        while(p1<p2){
            if(first+copy[p1]+copy[p2]==0){
                result.push([first,copy[p1],copy[p2]])
                while(p1<p2 && copy[p1]===copy[p1+1]) p1++;
                while(p1<p2 && copy[p2]===copy[p2-1]) p2--;
                p1=p1+1;
                p2=p2-1;
            }
            else if(first+copy[p1]+copy[p2]>0)
                p2=p2-1;
            else
                p1=p1+1;
        }
    }

    return result;    
};