//https://leetcode.com/problems/two-sum/description/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map ={};
    const deltaNums =[]
    for(let i=0;i<nums.length;i++){
        map[nums[i]]=i;
        deltaNums.push(target-nums[i])
    }
    for(let i=0;i<nums.length;i++){
        const index=map[deltaNums[i]];
        if(index && index!=i){
            return[i,index]
        }
    }

    
};