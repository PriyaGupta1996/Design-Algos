//https://leetcode.com/problems/snapshot-array/description/?envType=problem-list-v2&envId=ww61wmkv


//Optimized solution with binary search and array of arrays ( Solution 2).
// Why not use map? Because the snaps ID are already sorted and there are chances not be snapId is not present as there was no change in that snap. 
// In that case - find the largest snaIid which is smaller than the given snapId. 
// Binary search is used to find the largest snapId which is smaller than the given snapId
// Time complexity: O(log n) for get and O(1) for set and snap. 

/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.snapList = Array.from({length},()=>[[0,0]]);
    this.snapId=0;
    
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    const snapsAtDesiredIndex = this.snapList[index];
    if(snapsAtDesiredIndex[0][0]===this.snapId){
        snapsAtDesiredIndex[0][1]= val;
    }else{
        this.snapList[index].push([this.snapId,val]);
    }
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    return this.snapId++;
    
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    const snaps = this.snapList[index];
    let left =0; 
    let right = snaps.length-1;
    let result =0;
    while(left<=right){
        const mid = Math.floor((left+right)/2);
        if(snaps[mid][0]<=snap_id){ 
            result = snaps[mid][1]
            left = mid+1;
        }
        else right=mid-1;
    }
    return result;
    
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */



//Solution with object but heap memory limit exceeded ( Solution 1)
// Time complexity: O(n) for get and O(1) for set and snap.

/**
 * @param {number} length
 */

let snapshotArray;
let snapMap;
let snapIdCount;

var SnapshotArray = function(length) {    
    this.snapshotArray = Array(length).fill(0);
    this.snapMap={};
    this.snapIdCount=0;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.snapshotArray[index]= val;
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    this.snapIdCount=this.snapIdCount+1;
    const snapId = this.snapIdCount-1;
    this.snapMap[snapId]=this.snapshotArray.slice();
    return snapId;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    const snapShotArray = this.snapMap[snap_id];
    return snapShotArray[index];
    
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */