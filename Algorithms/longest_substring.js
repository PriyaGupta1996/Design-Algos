//https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let left=0;
    let right=0;
    let maxLen = 0;
    while(left<=right && left<s.length && right<s.length) {
        if(set.has(s[right])){
            set.delete(s[left]);
            left=left+1;
        }else{
            maxLen = Math.max(maxLen,right-left+1);
            set.add(s[right])
            right=right+1;
        }
    }
    return maxLen;
};