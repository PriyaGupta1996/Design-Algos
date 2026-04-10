//https://leetcode.com/problems/design-underground-system/description/?envType=problem-list-v2&envId=ww61wmkv


var UndergroundSystem = function() {
    this.commuterMap = {};        
    this.stationRouteMap = {};    
    this.stationAvgTimeMap = {}; 
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.commuterMap[id]={}
    this.commuterMap[id]={
        "src":stationName,
        "dest":null,
        "inTime":t,
        "outTime":null
    }
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const {src,inTime} = this.commuterMap[id];
    const route = `${src}_${stationName}`
    const timeSpent = t-inTime;
    let totalTime = timeSpent;
    let commuters = 1;
    if(this.stationRouteMap[route]){
        for(const [id,time] of Object.entries(this.stationRouteMap[route])){ // Object.entries return the array of key value pair of the object
            totalTime+=time;
            commuters+=1;
        }
        this.stationRouteMap[route][id]=timeSpent;
    }
    else{ 
        this.stationRouteMap[route]={};
        this.stationRouteMap[route][id]=timeSpent;
    }
    const avgTime = totalTime/commuters;
    this.stationAvgTimeMap[route]= avgTime;
    delete this.commuterMap[id]
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const route = `${startStation}_${endStation}`
    return this.stationAvgTimeMap[route]
    
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */