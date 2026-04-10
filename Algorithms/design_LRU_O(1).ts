//Question : https://leetcode.com/problems/lru-cache/?envType=problem-list-v2&envId=ww61wmkv

class LRUCache {
    recentOrderMap :Map<number,number>;
    recentKeys:number[];
    capacity:number

    constructor(capacity: number) {
        this.capacity= capacity;
        this.recentOrderMap = new Map<number,number>;
        this.recentKeys = new Array<number>(capacity);
    }

    get(key: number): number {
        if(this.recentOrderMap.has(key)){
            //check non null assertion operator. 
            const value = this.recentOrderMap.get(key)!;
            this.recentOrderMap.delete(key);
            this.recentOrderMap.set(key,value);
            return value;   
        } else 
            return -1;   
    }

    put(key: number, value: number): void {
        if(this.recentOrderMap.has(key)){ 
            this.recentOrderMap.delete(key);
        }
        else if(this.recentOrderMap.size >=this.capacity){
            // this is important to make "get" O(1), otherwise, we would need to fetch the keys and do a search for the first key, which would be O(n)
            //check non null assertion operator. 
            const firstKey = this.recentOrderMap.keys().next().value!; 
            this.recentOrderMap.delete(firstKey);
        }
        this.recentOrderMap.set(key,value);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */