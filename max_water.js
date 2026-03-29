//https://leetcode.com/problems/container-with-most-water/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea =0;
    let left =0;
    let right=height.length-1;
    while(left<right){
        const len = Math.min(height[right],height[left])
        const area = (right-left)*len;
        maxArea = Math.max(area,maxArea);
        if(height[left]<height[right])
            left++;
        else right --
    }

    return maxArea;
    
};