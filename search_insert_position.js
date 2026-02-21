//https://leetcode.com/problems/search-insert-position/description/?envType=problem-list-v2&envId=ww61wmkv


//main edge case - when the target is not found in array - return 0.
//  targetIndex is updated keeping an assumption that while statement is falsy in next iteration then what should be the ans ?

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left =0;
    let right = nums.length-1;
    let targetIndex=0;
    while(left<=right){
        const mid = Math.floor((left+right)/2);
        if(nums[mid]===target) return mid;
        else if(nums[mid]<target){
            targetIndex=mid+1;
            left=mid+1;
        }
        else right = mid-1;
    }
    return targetIndex;
    
};